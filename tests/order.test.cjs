const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

// Compile the actual route and validator, substituting only the HTTP transport.
function loadModule(relativePath, dependencies = {}, environment = {}, globals = {}) {
  const filename = path.join(__dirname, '..', relativePath);
  const source = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const exports = {};
  vm.runInNewContext(source, {
    exports,
    require: name => dependencies[name] || require(name),
    process: { env: environment },
    console: { error() {} },
    AbortSignal,
    ...globals,
  }, { filename });
  return exports;
}

const orderModule = loadModule('src/lib/order.ts');
const validOrder = {
  unit: 'bags', quantity: '2', coffeeType: 'arabica', coffeeGrade: 'AA',
  fullName: 'Test Customer', email: 'customer@example.com', phone: '+256 752 028 886',
  address: 'Kampala\nUganda', company: '', notes: '',
};

function routeHarness(result = { success: 'true' }, environment = {}, status = 200) {
  const sent = [];
  const { POST } = loadModule('src/app/api/send-order-email/route.ts', {
    '../../../lib/order': orderModule,
  }, { FORMSUBMIT_EMAIL: 'sales@example.com', ...environment }, {
    fetch: async (url, options) => {
      sent.push({ url, options, body: JSON.parse(options.body) });
      if (result instanceof Error) throw result;
      return {
        ok: status >= 200 && status < 300,
        status,
        json: async () => {
          if (result === 'invalid-json') throw new SyntaxError('Invalid JSON');
          return result;
        },
      };
    },
  });
  return { sent, post: body => POST({ json: async () => body, nextUrl: new URL('https://zicofe.com/api/send-order-email') }), POST };
}

test('valid orders send the selected quantity and customer reply address', async () => {
  const { post, sent } = routeHarness();
  const response = await post(validOrder);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true, message: 'Order submitted successfully' });
  assert.equal(sent.length, 1);
  assert.equal(sent[0].url, 'https://formsubmit.co/ajax/sales%40example.com');
  assert.equal(sent[0].body._replyto, validOrder.email);
  assert.equal(sent[0].body.email, validOrder.email);
  assert.equal(sent[0].body.name, validOrder.fullName);
  assert.equal(sent[0].body.phone, validOrder.phone);
  assert.equal(sent[0].body.coffee_type, 'Arabica');
  assert.equal(sent[0].body.coffee_grade, 'AA');
  assert.equal(sent[0].body.total_kilograms, '120.00');
  assert.equal(sent[0].body.total_bags, '2.00');
  assert.equal(sent[0].body.delivery_address, 'Kampala\nUganda');
  assert.equal(sent[0].body._url, 'https://zicofe.com/shop');
  assert.equal(sent[0].body._template, 'table');
  assert.equal(sent[0].body._captcha, 'false');
  assert.equal(sent[0].options.headers.Accept, 'application/json');
  assert.equal(sent[0].options.headers.Referer, 'https://zicofe.com/shop');
  assert.equal(sent[0].options.headers.Origin, 'https://zicofe.com');
  assert.ok(sent[0].options.signal instanceof AbortSignal);
});

test('kilograms convert to bags and optional fields may be omitted', async () => {
  const { post, sent } = routeHarness();
  const response = await post({ ...validOrder, unit: 'kg', quantity: 60, company: undefined, notes: undefined });
  assert.equal(response.status, 200);
  assert.equal(sent[0].body.total_kilograms, '60.00');
  assert.equal(sent[0].body.total_bags, '1.00');
  assert.equal(sent[0].body.company, 'Not provided');
  assert.equal(sent[0].body.notes, 'None');
});

test('invalid order details never reach the email service', async () => {
  const { post, sent } = routeHarness();
  const invalid = [null, [], {},
    ...['', '0', '-1', 'Infinity', '2bags', true].map(quantity => ({ ...validOrder, quantity })),
    { ...validOrder, unit: 'litres' }, { ...validOrder, coffeeType: 'tea' },
    { ...validOrder, coffeeType: 'robusta' }, { ...validOrder, coffeeGrade: 'unknown' },
    { ...validOrder, fullName: '   ' }, { ...validOrder, fullName: {} },
    { ...validOrder, email: 'invalid' }, { ...validOrder, phone: '123' },
    { ...validOrder, address: '' }, { ...validOrder, notes: 'x'.repeat(5001) },
  ];
  for (const body of invalid) assert.equal((await post(body)).status, 400, JSON.stringify(body));
  assert.equal(sent.length, 0);
});

test('malformed JSON returns a validation response', async () => {
  const { POST, sent } = routeHarness();
  const response = await POST({ json: async () => { throw new SyntaxError('invalid json'); } });
  assert.equal(response.status, 400);
  assert.equal(sent.length, 0);
});

test('default inbox works without API keys or environment configuration', async () => {
  const { post, sent } = routeHarness(undefined, { FORMSUBMIT_EMAIL: undefined });
  assert.equal((await post(validOrder)).status, 200);
  assert.equal(sent[0].url, 'https://formsubmit.co/ajax/silva%40zicofe.com');
});

test('provider rejections and malformed responses never report success', async () => {
  for (const result of [{ success: 'false', message: 'private details' }, { success: false }, {}]) {
    const { post } = routeHarness(result);
    const response = await post(validOrder);
    assert.equal(response.status, 502);
    const body = await response.json();
    assert.equal(body.success, undefined);
    assert.doesNotMatch(JSON.stringify(body), /private details/);
  }
});

test('HTTP errors fail even when a response claims success', async () => {
  const { post } = routeHarness({ success: true }, {}, 400);
  assert.equal((await post(validOrder)).status, 502);
});

test('service outages, rate limits, and non-JSON gateway errors report unavailable', async () => {
  for (const [result, status] of [[null, 200], ['invalid-json', 521], ['invalid-json', 200], [{ success: false }, 503], [{ success: true }, 429]]) {
    const { post } = routeHarness(result, {}, status);
    const response = await post(validOrder);
    assert.equal(response.status, 503);
    const body = await response.json();
    assert.match(body.error, /temporarily unavailable/);
    assert.equal(body.success, undefined);
  }
});

test('activation responses explain the setup requirement without claiming receipt', async () => {
  const { post } = routeHarness({ success: 'true', message: 'Please activate your form.' });
  const response = await post(validOrder);
  assert.equal(response.status, 503);
  assert.match((await response.json()).error, /awaiting email activation/);
});

test('boolean success responses are accepted', async () => {
  const { post } = routeHarness({ success: true });
  assert.equal((await post(validOrder)).status, 200);
});

test('transport failures return an error without exposing provider details', async () => {
  const { post } = routeHarness(new Error('private provider details'));
  const response = await post(validOrder);
  assert.equal(response.status, 503);
  assert.doesNotMatch(JSON.stringify(await response.json()), /private provider details/);
});

test('customer details remain plain data and cannot override FormSubmit settings', async () => {
  const { post, sent } = routeHarness();
  const response = await post({ ...validOrder, notes: 'Please call before delivery.\nA & B', _subject: 'Override', _cc: 'attacker@example.com' });
  assert.equal(response.status, 200);
  assert.equal(sent[0].body.notes, 'Please call before delivery.\nA & B');
  assert.equal(sent[0].body._subject, 'New ZICOFE Coffee Order Request from Test Customer');
  assert.equal(sent[0].body._cc, undefined);
});

test('shop radio choices share groups so one coffee selection satisfies required validation', () => {
  const React = require('react');
  const { renderToStaticMarkup } = require('react-dom/server');
  const { default: ShopPage } = loadModule('src/app/shop/page.tsx', {
    '../../lib/order': orderModule,
    '../../components/Header': { default: () => null },
    '../../components/Footer': { default: () => null },
    'next/link': { default: ({ children, ...props }) => React.createElement('a', props, children) },
  });
  const markup = renderToStaticMarkup(React.createElement(ShopPage));
  const radios = markup.match(/<input\b[^>]*type="radio"[^>]*>/g);
  assert.equal(radios.length, 4);
  assert.equal(radios.filter(input => input.includes('name="unit"')).length, 2);
  const coffeeChoices = radios.filter(input => input.includes('name="coffeeType"'));
  assert.equal(coffeeChoices.length, 2);
  assert.ok(coffeeChoices.every(input => input.includes('required=""')));
});

export const coffeeGrades = {
  robusta: [
    'Natural Uganda Screen 1800',
    'Natural Uganda Robusta Screen 1500',
    'Natural Uganda Robusta Screen 1200',
    'BHP 1199',
    'Black Beans',
    'Natural Uganda Robusta Screen 1700+',
    'Washed Uganda Robusta Screen 1500+',
  ],
  arabica: ['AA', 'AB', 'CPB', 'Wugar', 'A', 'Dry Processed Uganda Arabica'],
};

export function validateOrder(body: unknown) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new Error('Please provide your order details.');
  }

  const input = body as Record<string, unknown>;
  const text = (field: string, label: string, max: number, required = true) => {
    const value = input[field];
    if (!required && (value === undefined || value === null)) return '';
    if (typeof value !== 'string' || (required && !value.trim()) || value.length > max) {
      throw new Error(`Please enter a valid ${label} (up to ${max} characters).`);
    }
    return value.trim();
  };

  const unit = input.unit;
  if (unit !== 'kg' && unit !== 'bags') throw new Error('Please select kilograms or bags.');
  const quantity = typeof input.quantity === 'string' && input.quantity.trim()
    ? Number(input.quantity) : input.quantity;
  if (typeof quantity !== 'number' || !Number.isFinite(quantity) || quantity < 1 || !Number.isFinite(quantity * 60)) {
    throw new Error('Please enter a quantity of at least 1.');
  }
  const coffeeType = input.coffeeType;
  if (coffeeType !== 'arabica' && coffeeType !== 'robusta') {
    throw new Error('Please select a coffee type.');
  }
  const coffeeGrade = text('coffeeGrade', 'coffee grade', 100);
  if (!coffeeGrades[coffeeType].includes(coffeeGrade)) {
    throw new Error('Please select a grade for your chosen coffee type.');
  }
  const fullName = text('fullName', 'full name', 200);
  const email = text('email', 'email address', 254);
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) {
    throw new Error('Please enter a valid email address.');
  }
  const phone = text('phone', 'phone number', 50);
  if (!/^\+?[\d\s().-]+$/.test(phone) || phone.replace(/\D/g, '').length < 7) {
    throw new Error('Please enter a valid phone number.');
  }
  return {
    unit, quantity, coffeeType, coffeeGrade, fullName, email, phone,
    company: text('company', 'company name', 200, false),
    address: text('address', 'delivery address', 2000),
    notes: text('notes', 'notes', 5000, false),
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'coffee-light': '#f1f6f0',
        'coffee-dark': '#163d1e',
        'coffee-medium': '#3f6145',
        'coffee-brown': '#20572b', // Brand green; shared across existing theme classes.
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',  // 24px on mobile
          sm: '2rem',         // 32px on small screens
          md: '2rem',         // 32px on medium screens
          lg: '3rem',         // 48px on large screens
          xl: '4rem',         // 64px on extra large screens
          '2xl': '5rem',      // 80px on 2xl screens
        },
      },
    },
  },
  plugins: [],
}

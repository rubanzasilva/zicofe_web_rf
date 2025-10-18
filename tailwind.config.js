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
        'coffee-light': '#f7f2ef',
        'coffee-dark': '#251804',
        'coffee-medium': '#453624',
        'coffee-brown': '#35241a', // New color for better visibility
      },
    },
  },
  plugins: [],
}
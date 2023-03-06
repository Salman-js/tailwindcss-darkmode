/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
      },
    },
  },
  plugins: [],
};

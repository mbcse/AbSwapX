/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#1C1C1C',
        'secondary-white': '#F4F4F4',
        'secondary-dark': '#222228',
        'primary-green': '#10BB35',
      }
    },
    plugins: [
      require("daisyui"),
    ],
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'bg': '#faf8f6',
      'blue': '#19173a',
      'light-black': '#6d6b69',
      'white': 'fff',
      'text-white': '#f1f0f5',
      'orange': '#f5683c',
      'light-purple': '#f1e4ef',
    },
    extend: {
      //   backgroundImage: {
      //   'hero-image': "url('/img/hero-pattern.svg')",
      //   'explore-one': "url('')",
      // }
    },
  },
  plugins: [],
}

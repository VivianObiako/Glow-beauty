/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'bg': '#faf8f6',
      'blue': '#19173a',
      'mid-blue':'#282749',
      'light-blue':'#7f7d9a',
      'light-black': '#6d6b69',
      'white': '#fff',
      'text-white': '#f1f0f5',
      'orange': '#f5683c',
      'mid-orange': '#f6866a',
      'light-orange': '#ffe5de',
      'light-purple': '#f1e4ef',
    },
    extend: {
      //   backgroundImage: {
      //   'hero-image': "url('/img/hero-pattern.svg')",
      //   'explore-one': "url('')",
      // }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors: {
        sidebar: '#f8f9fa',
      },
    },
  },
  plugins: [require('preline/plugin')],
}

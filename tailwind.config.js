/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/lib/images/bg-hero-pattern.svg')",
      }),
      // drop shadow text
      boxShadow: {
        'text': '0 0 10px rgba(0, 0, 0, 0.5)'
      },
      textStroke: {
        'black': '1px black',
        },
      }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('postcss-import'),
    require('@tailwindcss/typography'),
  ],
}


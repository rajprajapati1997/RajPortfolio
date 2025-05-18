/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827', // deep blue-gray
        secondary: '#00E6B8', // bright teal
        accent: '#FFB300', // gold accent
        neutral: '#18181B', // dark neutral
        'neutral-light': '#232336',
        'text-primary': '#F3F4F6',
        'text-secondary': '#A1A1AA',
        error: '#FF4C4C',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        opensans: ['var(--font-opensans)'],
      },
    },
  },
  plugins: [],
}

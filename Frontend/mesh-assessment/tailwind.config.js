/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // For `app` directory (Next.js 13+)
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      fontFamily: {
        ox: ['Oxygen','sans'],
        Grotesk: ['Space Grotesk', 'sans'],
        Poppins: ['Poppins', 'sans']
      }
    },
  },
  plugins: [],
}


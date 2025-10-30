/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // TODO: Add custom colors, fonts, etc. for kid-friendly design
      // Consider:
      // - Large, readable fonts
      // - Bright, engaging colors
      // - High contrast for accessibility
      colors: {
        // Example: primary: '#your-color-here'
      },
      fontSize: {
        // Example: 'xxl': '3rem' for large touch targets
      },
    },
  },
  plugins: [],
}

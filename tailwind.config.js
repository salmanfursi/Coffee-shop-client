/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'coffee-gradient': 'linear-gradient(45deg, #3e2723, #a1887f)',
      },
    },
  },
  plugins: [require("daisyui")],  
}


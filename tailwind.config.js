/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "light-grayish-blue": "hsl(234, 39%, 85%)",
        "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
        "dark-grayish-blue": "hsl(234, 11%, 52%)",
        "very-dark-grayish-blue1": "hsl(233, 14%, 35%)",
        "very-dark-grayish-blue2": "hsl(237, 14%, 26%)",
      },
      fontFamily: {
        "josefin-sans": ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

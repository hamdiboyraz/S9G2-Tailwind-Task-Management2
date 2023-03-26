/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tasktitle: "#c8781a",
        urgent: "#ec321a",
        normal: "#d4d7ff",
        done: "#fecc91",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

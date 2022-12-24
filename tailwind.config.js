/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        md: "var(--rounded-md)",
        lg: "var(--rounded-lg)",
      },
      boxShadow: {
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      colors: {
        blue: "var(--blue-color)",
        green: "var(--green-color)",
        red: "var(--red-color)",
        gray: "var(--gray-color)",
        body: "var(--body-color)",
        line: "var(--line-color)",
        heading: "var(--heading-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};

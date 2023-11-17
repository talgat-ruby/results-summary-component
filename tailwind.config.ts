/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient1-from": "hsla(var(--gradient1-from) / <alpha-value>)",
        "gradient1-via": "hsla(var(--gradient1-via) / <alpha-value>)",
        "gradient1-to": "hsla(var(--gradient1-to) / <alpha-value>)",
        "gradient2-from": "hsla(var(--gradient2-from) / <alpha-value>)",
        "gradient2-via": "hsla(var(--gradient2-via) / <alpha-value>)",
        "gradient2-to": "hsla(var(--gradient2-to) / <alpha-value>)",
        background: "hsla(var(--background) / <alpha-value>)",
        "secondary-text": "hsla(var(--secondary-text) / <alpha-value>)",
        title: "hsla(var(--title) / <alpha-value>)",
        red: "hsla(var(--red) / <alpha-value>)",
        yellow: "hsla(var(--yellow) / <alpha-value>)",
        green: "hsla(var(--green) / <alpha-value>)",
        blue: "hsla(var(--blue) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

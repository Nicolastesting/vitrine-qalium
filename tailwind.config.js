/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071117",
        "ink-soft": "#102028",
        "paper": "#f7faf8",
        "paper-muted": "#edf3ef",
        "line": "#dbe5df",
        "brand": "#0f766e",
        "brand-light": "#2dd4bf",
        "accent": "#f59e0b",
        "danger-soft": "#fee2e2",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(7, 17, 23, 0.14)",
        panel: "0 18px 60px rgba(7, 17, 23, 0.24)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

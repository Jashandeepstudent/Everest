/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1A1F1C",
          light: "#252B27",
        },
        paper: {
          DEFAULT: "#F5F2EA",
          dark: "#EBE6D8",
        },
        brass: {
          DEFAULT: "#C6A15B",
          light: "#D4B579",
          dark: "#A8853F",
        },
        rust: {
          DEFAULT: "#8B3A2F",
          light: "#A34A3D",
        },
        moss: {
          DEFAULT: "#4A5D52",
          light: "#5D7268",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "72ch",
      },
      keyframes: {
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gauge-sweep": {
          "0%": { transform: "rotate(-90deg)" },
          "100%": { transform: "rotate(var(--sweep-end, 45deg))" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "gauge-sweep": "gauge-sweep 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for the footer background and gradients
        purple: {
          800: "#4B0082", // Dark purple
          600: "#6A0DAD", // Medium purple
          500: "#9370DB", // Light purple
        },
        blue: {
          900: "#000080", // Navy blue
          600: "#4682B4", // Steel blue
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        // Animations for interactive effects
        "gradient-move": "gradientBG 6s infinite alternate",
        float: "float 4s infinite ease-in-out",
        "float-reverse": "float 4s infinite ease-in-out reverse",
        "fade-in-up": "fadeInUp 1s ease-out",
        "fade-in": "fadeIn 2s ease-in", // Added fade-in for general use
      },
      keyframes: {
        gradientBG: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      spacing: {
        // Custom spacing for margins/paddings
        "18": "4.5rem",
        "22": "5.5rem",
      },
      fontFamily: {
        // Custom font family for modern look
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        // Custom shadows for cards and images
        "logo": "0 4px 10px rgba(0, 0, 0, 0.3)",
        "button": "0 2px 8px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;

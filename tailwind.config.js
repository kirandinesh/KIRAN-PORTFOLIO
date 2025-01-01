/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobileL: "425px",
      },

      fontFamily: {
        header: ["Conthrax-SemiBold"],
        texts: ["TT Chocolates Trial Light"],
        subhead: ["Kanit", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      keyframes: {
        bounceAlpha: {
          "0%": { opacity: "1", transform: "translateX(0px) scale(1)" },
          "25%": { opacity: "0", transform: "translateX(10px) scale(0.9)" },
          "26%": { opacity: "0", transform: "translateX(-10px) scale(0.9)" },
          "55%": { opacity: "1", transform: "translateX(0px) scale(1)" },
        },
        rightBounce: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
        leftBounce: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-5px)" },
        },
        text: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
      animation: {
        rightBounce: "rightBounce 0.5s ease-in-out infinite",
        leftBounce: "leftBounce 0.5s ease-in-out infinite",
        text: "text 5s ease infinite",
        rotate: "rotate 10s linear infinite",
        bounceAlpha: "bounceAlpha 1.4s infinite linear",
      },
      colors: {
        darkGray: "#131313",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          background: "#131313",
        },
        secondary: {
          1: "#F5EEE6",
          2: "#F5EEE6",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [tailwindcssAnimate],
};


import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: "#E0F2FE",
        input: "#E0F2FE",
        ring: "#134e6f",
        background: "#FAFBFC",
        foreground: "#10213E",
        primary: {
          DEFAULT: "#134e6f",
          foreground: "#FAFBFC"
        },
        secondary: {
          DEFAULT: "#E9F5FB", // very light sky blue
          foreground: "#10213E"
        },
        destructive: {
          DEFAULT: '#dc2626',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: "#F6FAFC",
          foreground: "#5B6C8A"
        },
        accent: {
          DEFAULT: "#E9F5FB",
          foreground: "#134e6f"
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#134e6f"
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#134e6f"
        },
        highlight: "#459EC9", // Soothing blue
        action: "#134e6f",
        blue: {
          50: "#E3EEFC",
          100: "#C2E0FB",
          200: "#9ED3F7",
          300: "#70B9E4",
          400: "#459EC9",
          500: "#2071A7",
          600: "#134e6f",
          700: "#17395C",
          900: "#10213E"
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

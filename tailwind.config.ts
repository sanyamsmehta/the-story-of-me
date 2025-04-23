
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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#FFFFFF', // white background
        foreground: '#2A2A2A', // dark text
        primary: {
          DEFAULT: '#6A98C9', // soothing blue
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#F0F7FF', // very light blue
          foreground: '#2A2A2A'
        },
        destructive: {
          DEFAULT: '#dc2626',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#F5F8FC',
          foreground: '#6B7280'
        },
        accent: {
          DEFAULT: '#E5EDF8',
          foreground: '#2A2A2A'
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#2A2A2A'
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#2A2A2A'
        },
        portfolio: {
          purple: '#6A98C9', // replaced with soothing blue
          darkPurple: '#4A6D9A',
          lightPurple: '#B5CDE6',
          dark: '#2A2A2A',
          light: '#F0F7FF',
        },
        sidebar: {
          DEFAULT: '#FFFFFF',
          foreground: '#2A2A2A',
          primary: '#6A98C9',
          'primary-foreground': '#FFFFFF',
          accent: '#6A98C9',
          'accent-foreground': '#FFFFFF',
          border: '#E5EDF8',
          ring: '#6A98C9'
        },
        highlight: "#6A98C9",
        action: "#6A98C9",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
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

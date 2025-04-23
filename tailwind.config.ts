
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
        background: '#10182B', // deep dark blue for bg
        foreground: '#F4F7FA', // almost white text
        primary: {
          DEFAULT: '#1796d2', // blue highlight
          foreground: '#F4F7FA'
        },
        secondary: {
          DEFAULT: '#25304b',
          foreground: '#F4F7FA'
        },
        destructive: {
          DEFAULT: '#dc2626',
          foreground: '#F4F7FA'
        },
        muted: {
          DEFAULT: '#1B2235',
          foreground: '#B4C0D0'
        },
        accent: {
          DEFAULT: '#233E57',
          foreground: '#F4F7FA'
        },
        popover: {
          DEFAULT: '#182238',
          foreground: '#F4F7FA'
        },
        card: {
          DEFAULT: '#182238',
          foreground: '#F4F7FA'
        },
        portfolio: {
          purple: '#1796d2', // replaced purple with blue highlight
          darkPurple: '#10182B',
          lightPurple: '#233E57',
          dark: '#10182B',
          light: '#182238',
        },
        sidebar: {
          DEFAULT: '#161B22',
          foreground: '#F4F7FA',
          primary: '#1796d2',
          'primary-foreground': '#F4F7FA',
          accent: '#1796d2',
          'accent-foreground': '#F4F7FA',
          border: '#1B2235',
          ring: '#1796d2'
        },
        highlight: "#1796d2",
        action: "#1796d2",
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

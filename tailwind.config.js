/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom design tokens
        'bg-primary': '#050B14',
        'bg-secondary': '#080F1E',
        'bg-tertiary': '#0C1628',
        'surface': '#111D35',
        'surface-light': '#1A2A47',
        'text-primary': '#F8FAFF',
        'text-secondary': '#8A9BB3',
        'text-tertiary': '#4A5A73',
        'gold': '#D4A843',
        'gold-light': '#E8C76A',
        'gold-dim': 'rgba(212, 168, 67, 0.15)',
        'success': '#3BD6A3',
        'border-custom': '#1A2A47',
        'border-light': '#2A3D5C',
        'whatsapp': '#25D366',
        'whatsapp-dark': '#128C7E',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'elevated': '0 16px 48px rgba(0, 0, 0, 0.5)',
        'glow-gold': '0 0 40px rgba(212, 168, 67, 0.25)',
        'glow-gold-lg': '0 0 80px rgba(212, 168, 67, 0.3)',
        'whatsapp': '0 4px 20px rgba(37, 211, 102, 0.4)',
        'whatsapp-hover': '0 6px 28px rgba(37, 211, 102, 0.6)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "float": {
          "0%": { transform: "translateY(100vh) translateX(0)", opacity: "0" },
          "10%": { opacity: "var(--particle-opacity, 0.2)" },
          "90%": { opacity: "var(--particle-opacity, 0.2)" },
          "100%": { transform: "translateY(-10vh) translateX(var(--particle-drift, 0px))", opacity: "0" },
        },
        "pulse-whatsapp": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
        "bounce-scroll": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "pulse-gentle": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "float": "float var(--particle-duration, 20s) linear var(--particle-delay, 0s) infinite",
        "pulse-whatsapp": "pulse-whatsapp 2s ease-in-out infinite",
        "bounce-scroll": "bounce-scroll 2s ease-in-out infinite",
        "pulse-gentle": "pulse-gentle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

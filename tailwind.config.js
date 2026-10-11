/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0B1A12',
          900: '#112A1D',
          800: '#173D2A', // Primary Deep Forest Green
          700: '#1E4C34',
          600: '#286243',
        },
        botanical: {
          800: '#23442B',
          700: '#315C3B', // Botanical Green
          600: '#3F744C',
          500: '#529162',
        },
        leaf: {
          700: '#5F763B',
          600: '#7D9A50', // Natural Leaf Green
          500: '#94B263',
          400: '#B0CA85',
        },
        ivory: {
          50: '#FDFBF7',
          100: '#F8F5ED', // Warm Ivory Background
          200: '#EFE9DC',
        },
        gold: {
          300: '#E0C57A',
          400: '#D4B35E',
          500: '#C9A34E', // Muted Gold Accent
          600: '#AF8836',
          700: '#8A6820',
        },
        charcoal: {
          900: '#1B1D19',
          800: '#252823', // Primary dark text
          700: '#3D423B',
          600: '#585F55',
          500: '#757C71',
        },
        beige: {
          100: '#F4EFE6',
          200: '#E9E0D0', // Warm Beige border / divider
          300: '#D9CEB9',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'botanical': '0 10px 30px -10px rgba(23, 61, 42, 0.15)',
        'gold-glow': '0 0 25px rgba(201, 163, 78, 0.2)',
        'dark-card': '0 15px 35px -5px rgba(11, 26, 18, 0.35)',
      },
    },
  },
  plugins: [],
}

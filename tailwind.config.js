/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070B14',
          900: '#0B1120',
          800: '#111827',
          700: '#1A2333',
          600: '#28334A',
        },
        paper: {
          50: '#F7F8FA',
          100: '#E8EAF0',
          200: '#C7CCDA',
        },
        teal: {
          400: '#3ED9C4',
          500: '#2BC2AD',
          600: '#1FA391',
        },
        amber: {
          400: '#F2A65A',
          500: '#E8934A',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(62,217,196,0.15), 0 8px 30px rgba(62,217,196,0.08)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};

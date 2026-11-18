/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0A1931',
            darkest: '#050D1A',
            darker: '#071326',
            surface: '#0E2244',
            light: '#132E5B',
            border: '#1E437C',
          },
          blue: {
            DEFAULT: '#0090FF',
            light: '#38BDF8',
            dark: '#0369A1',
            deep: '#0F2B48',
          },
          orange: {
            DEFAULT: '#FF6B00',
            hover: '#E55E00',
            light: '#FFA043',
            glow: 'rgba(255, 107, 0, 0.35)',
          },
          leaf: {
            start: '#FFA114',
            end: '#FF5E00',
          }
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 144, 255, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(255, 107, 0, 0.35)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

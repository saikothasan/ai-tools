/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f0f1a',
        primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#7209b7',
        neon: '#4cc9f0',
      },
    },
  },
  plugins: [],
};
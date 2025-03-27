/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F6A64F',
        secondary: '#b56141',
        background: '#FFFCF8',
        white: '#FBFBFB',
        warning: '#F1C40F',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #f4a44f, #ac573f)',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        satisfy: ['Satisfy', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

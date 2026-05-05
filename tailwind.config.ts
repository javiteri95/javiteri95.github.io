import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#EEEEEE',
        primary: '#1F6F5F',
        secondary: '#2FA084',
        highlight: '#6FCF97',
      },
    // colors: {
    //     background: '#FFF2E0',
    //     primary: '#898AC4',
    //     secondary: '#A2AADB',
    //     highlight: '#C0C9EE',
    // },
    // colors: {
    //     background: '#BDE8F5',
    //     primary: '#0F2854',
    //     secondary: '#1C4D8D',
    //     highlight: '#4988C4'
    // },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;

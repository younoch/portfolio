const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1', // Your existing DEFAULT
          600: '#4F46E5',
          700: '#4338CA', // Your existing dark
          800: '#3730A3',
          900: '#312E81',
          DEFAULT: '#6366F1',
          dark: '#4338CA'
        },
        secondary: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // Your existing DEFAULT
          600: '#059669',
          700: '#047857', // Your existing dark
          800: '#065F46',
          900: '#064E3B',
          DEFAULT: '#10B981',
          dark: '#047857'
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        },
        background: {
          light: '#FFFFFF',
          dark: '#020c1c'
        },
        text: {
          light: '#1F2937',
          dark: '#F3F4F6'
        },
        accent: {
          light: '#F59E0B',
          dark: '#B45309'
        },
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        heading: ['Montserrat', ...defaultTheme.fontFamily.sans],
        accent: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
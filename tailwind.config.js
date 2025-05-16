/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5AC1A4',
          dark: '#438d78',
          light: '#7ad8be',
          50: '#f0faf7',
          100: '#d2f2e8',
          200: '#a6e5d1',
          300: '#7ad8be',
          400: '#5ac1a4',
          500: '#3da689',
          600: '#2d856c',
          700: '#246856',
          800: '#1d5244',
          900: '#183f36',
        },
        secondary: {
          DEFAULT: '#616A73',
          dark: '#4a5159',
          light: '#7d8892',
          50: '#f5f6f7',
          100: '#e1e3e6',
          200: '#c8ccd1',
          300: '#a7afb8',
          400: '#8d97a3',
          500: '#616a73',
          600: '#4e555c',
          700: '#3f444a',
          800: '#30343a',
          900: '#21252a',
        },
        blue: {
          DEFAULT: '#2F6BFF', 
          50: '#EBF1FF',
          100: '#D7E3FF',
          200: '#AFC7FF',
          300: '#87ABFF',
          400: '#5F8FFF',
          500: '#2F6BFF',
          600: '#0047F5',
          700: '#0037BD',
          800: '#002685',
          900: '#00164D'
        }
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 10px 30px rgba(0, 0, 0, 0.12)',
        'button': '0 4px 10px rgba(47, 107, 255, 0.3)',
      },
      borderRadius: {
        'xl': '0.9rem',
        '2xl': '1.25rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.500'),
              },
            },
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
} 
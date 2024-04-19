/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        base: {
          input: '#040F1A',
          background: '#071422',
          profile: '#0B1B2B',
          post: '#112131',
          border: '#1C2F41',
          label: '#3A536B',
          span: '#7B96B2',
          text: '#AFC2D4',
          subtitle: '#C4D4E3',
          title: '#E7EDF4',
          blue: '#3294F8',
        },
      },
    },
  },
  plugins: [],
};

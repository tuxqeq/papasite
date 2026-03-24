import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple:        '#A100FF',
          'purple-dark': '#7800BF',
          'purple-light':'#C84DFF',
          black:         '#000000',
          'gray-dark':   '#1A1A1A',
          'gray-mid':    '#3D3D3D',
          'gray-light':  '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

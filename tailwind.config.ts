import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'marine-blue': 'var(--marine-blue)',
        'purplish-blue': 'var(--purplish-blue)',
        'light-blue': 'var(--light-blue)',
        'pastel-blue': 'var(--pastel-blue)',
        'strawberry-red': 'var(--strawberry-red)',
        'cool-gray': 'var(--cool-gray)',
        'light-gray': 'var(--light-gray)',
        'magnolia': 'var(--magnolia)',
        'alabaster': 'var(--alabaster)',
        'white': 'var(--white)',
      }
    },
  },
  plugins: [],
}
export default config

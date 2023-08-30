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
        'cool-grey': 'var(--cool-grey)',
        'light-grey': 'var(--light-grey)',
        'mangolia': 'var(--mangolia)',
        'alabaster': 'var(--alabaster)',
        'white': 'var(--white)',
      }
    },
  },
  plugins: [],
}
export default config

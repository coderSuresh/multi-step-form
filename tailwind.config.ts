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
        'marine_blue': 'var(--marine-blue)',
        'purplish_blue': 'var(--purplish-blue)',
        'light_blue': 'var(--light-blue)',
        'pastel_blue': 'var(--pastel-blue)',
        'strawberry_red': 'var(--strawberry-red)',
        'cool_grey': 'var(--cool-grey)',
        'light_grey': 'var(--light-grey)',
        'mangolia': 'var(--mangolia)',
        'alabaster': 'var(--alabaster)',
        'white': 'var(--white)',
      }
    },
  },
  plugins: [],
}
export default config

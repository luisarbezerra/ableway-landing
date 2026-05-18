import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: '#6ED3B1',
          dark: '#44B893',
          light: '#E8F7F2',
          lighter: '#F4FBF8',
        },
        navy: {
          DEFAULT: '#1C3144',
          light: '#2A4860',
        },
        warm: '#F8F6F2',
        stone: '#6B7280',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      maxWidth: {
        container: '1160px',
      },
    },
  },
  plugins: [],
}
export default config

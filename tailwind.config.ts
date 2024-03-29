
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      'dark': "#242424"
    },
    extend: {},
  },
  plugins: [require('daisyui')],
} satisfies Config


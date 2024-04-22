import { colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'
import type { Config } from 'tailwindcss'

extend([mixPlugin])

export function generateDarkenColorFrom(input: string, percentage = 0.07): string {
  return colord(input).darken(percentage).toHex()
}

export function generateForegroundColorFrom(input: string, percentage = 0.8): string {
  return colord(input)
    .mix(colord(input).isDark() ? 'white' : 'black', percentage)
    .toHex()
}

type ColorObject = {
  [key: string]: string
}

export const tailwindColors: ColorObject = {
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000000',
  white: '#FFFFFF',
  primary: '#4318FF',
  text: '#2B3674',
  'primary-content': '#FFFFFF',
  'primary-focus': generateDarkenColorFrom('#4318FF'),
  'base-25': '#F4F7FE',
  'base-75': '#E0E5F2',
  'base-200': '#A3AED0',
  info: '#5790FF',
  'info-content': generateForegroundColorFrom('#5790FF'),
  success: '#05CD99',
  'success-content': generateForegroundColorFrom('#05CD99'),
  warning: '#FFCE20',
  'warning-content': generateForegroundColorFrom('#FFCE20'),
  error: '#EE5D50',
  'error-content': generateForegroundColorFrom('#EE5D50'),
}

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: tailwindColors,
    extend: {},
    container: {
      center: true,

      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
export default config

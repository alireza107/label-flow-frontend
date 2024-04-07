import type { Config } from 'tailwindcss'
import { colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'

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
  primary: '#4BB0B7',
  'primary-content': '#FFFFFF',
  'primary-focus': generateDarkenColorFrom('#4BB0B7'),
  secondary: '#FFA552',
  'secondary-content': '#FFFFFF',
  'secondary-focus': generateDarkenColorFrom('#FFA552'),
  neutral: '#939393',
  'neutral-content': generateForegroundColorFrom('#FFFFFF'),
  'neutral-focus': generateDarkenColorFrom('#939393', 0.03),
  'base-25': '#E6E6E6',
  'base-75': '#B5B5B5',
  'base-200': '#686868',
  info: '#5790FF',
  'info-content': generateForegroundColorFrom('#5790FF'),
  success: '#33D373',
  'success-content': generateForegroundColorFrom('#33D373'),
  warning: '#FF8D3A',
  'warning-content': generateForegroundColorFrom('#FF8D3A'),
  error: '#DF5555',
  'error-content': generateForegroundColorFrom('#DF5555'),
}

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: tailwindColors,
    extend: {},
  },
  plugins: [],
}
export default config

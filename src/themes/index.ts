import { Roboto } from 'next/font/google'
import { lightTheme } from './light.theme'
import { darkTheme } from './dark.theme'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes

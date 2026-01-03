// .storybook/preview.ts
import { CssBaseline, ThemeProvider } from '@mui/material'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'

import { themes } from '../src/themes'

// Load Roboto fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/material-icons'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            expanded: true,
            hideNoControlsWarning: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        withThemeFromJSXProvider({
            themes,
            defaultTheme: 'light',
            Provider: ThemeProvider,
            GlobalStyles: CssBaseline,
        }),
    ],
}

export default preview

// .storybook/preview.js
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import { themes } from '@/themes';

// Load Roboto fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
	        expanded: true,
	        hideNoControlsWarning: true,
	        matchers: {
	            color: /(background|color)$/i,
	            date: /Date$/,
	        },
        },
    },
};
export default preview;

export const decorators = [
    withThemeFromJSXProvider({
        themes,
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles: CssBaseline,
    })];

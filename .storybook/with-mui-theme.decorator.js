import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { themes } from '@/themes';

export const withMuiTheme = (Story, context) => {
    const { theme: themeKey } = context.globals;

    // only recompute the theme if the themeKey changes
    const theme = useMemo(() => themes[themeKey] || themes['light'], [themeKey])

    return (
      <Emotion10ThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story {...context} />
        </ThemeProvider>
      </Emotion10ThemeProvider>
    );
};

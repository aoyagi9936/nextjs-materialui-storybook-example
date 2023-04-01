import { Roboto } from 'next/font/google';
// import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';

import { lightTheme } from "./light.theme";
import { darkTheme } from "./dark.theme";

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const themes = {
    light: lightTheme,
    dark: darkTheme,
};

// // Create a theme instance.
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#556cd6',
//         },
//         secondary: {
//             main: '#19857b',
//         },
//         error: {
//             main: red.A400,
//         },
//     },
//     typography: {
//         fontFamily: roboto.style.fontFamily,
//     },
// });

export default themes;

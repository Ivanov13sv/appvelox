import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
    title: 'light',
    color: {
        main: '#003B72',
        secondary: '#50CAFF',
        accent: '#7761FF',
        darkenAccent: '#5342b8',
        uiBase: '#fdfdfd',
        bg: '#FFFFFF',
        text: '#333',
        otherElems: '#50caff',
        success: '#00bb00',
        error: '#ff0000',
    },
    media: {
        phoneSM: '(min-width:375px)',
        phoneMD: '(min-width:480px)',
        tablet: '(min-width:600px)',
        desktop: '(min-width:801px)',
        desktopPlus: '(min-width:1281px)',
    },
    other: {
        boxShadow: '0px 0px 5px #979797',
    },
};
export const darkTheme: DefaultTheme = {
    title: 'dark',
    color: {
        main: '#2a2a2a',
        secondary: '#333',
        accent: '#7761FF',
        uiBase: '#5e5e5e',
        darkenAccent: '#5342b8',
        bg: '#222',
        text: 'whitesmoke',
        otherElems: '#7761FF',
        success: '#00bb00',
        error: '#ff0000',
    },
    media: {
        phoneSM: '(min-width:375px)',
        phoneMD: '(min-width:480px)',
        tablet: '(min-width:600px)',
        desktop: '(min-width:801px)',
        desktopPlus: '(min-width:1281px)',
    },
    other: {
        boxShadow: '0px 0px 3px #6c6c6c',
    },
};

// export const myTheme: DefaultTheme = {
//     color: {
//         main: '#003B72',
//         secondary: '#50CAFF',
//         accent: '#7761FF',
//         darkenAccent: '#5342b8',
//         bg: '#FFFFFF',
//     },
//     media: {
//         phoneSM: '(min-width:375px)',
//         phoneMD: '(min-width:480px)',
//         tablet: '(min-width:600px)',
//         desktop: '(min-width:801px)',
//         desktopPlus: '(min-width:1281px)',
//     },
//     other: {
//         boxShadow: '0px 0px 5px #979797',
//     },
// };

// interface IThemeVars {
//     media: {
//         phoneSM: string;
//         phoneMD: string;
//         tablet: string;
//         desktop: string;
//         desktopPlus: string;
//     };
//     other: {
//         boxShadow: string;
//     };
// }

// const themeVars: IThemeVars = {
//     media: {
//         phoneSM: '(min-width:375px)',
//         phoneMD: '(min-width:480px)',
//         tablet: '(min-width:600px)',
//         desktop: '(min-width:801px)',
//         desktopPlus: '(min-width:1281px)',
//     },
//     other: {
//         boxShadow: '0px 0px 5px #979797',
//     },
// };
// interface IThemeColors extends IThemeVars {
//     main: string;
//     secondary: string;
//     accent: string;
//     darkenAccent: string;
//     bg: string;
// }

// export const testTheme: IThemeColors = {

//     main: '#003B72',
//     secondary: '#50CAFF',
//     accent: '#7761FF',
//     darkenAccent: '#5342b8',
//     bg: '#FFFFFF',

// };

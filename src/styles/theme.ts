import { DefaultTheme } from 'styled-components';

export const myTheme: DefaultTheme = {
    color: {
        main: '#003B72',
        secondary: '#50CAFF',
        accent: '#7761FF',
        darkenAccent: '#5342b8',
        bg: '#FFFFFF',
    },
    media: {
        phoneSM: '(min-width:375px)',
        phoneMD: '(min-width:480px)',
        tablet: '(min-width:600px)',
        desktop: '(min-width:801px)',
    },
    other:{
        boxShadow: '0px 0px 5px #979797'
    }
};

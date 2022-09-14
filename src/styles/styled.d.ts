import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			main: string;
			secondary: string;
			accent: string;
			darkenAccent: string;
			bg: string;
		};
		font?: {

		};
		media:{
			phoneSM: string;
			phoneMD: string;
			tablet: string;
			desktop: string;
		}
		other: {
			boxShadow: string;
		}
	}
}

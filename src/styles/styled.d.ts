import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string,
		color: {
			main: string;
			secondary: string;
			accent: string;
			uiBase: string;
			darkenAccent: string;
			bg: string;
			text: string;
			otherElems: string;
			success: string;
			error: string;
		};
		font?: {

		};
		media:{
			phoneSM: string;
			phoneMD: string;
			tablet: string;
			desktop: string;
			desktopPlus: string;
		}
		other: {
			boxShadow: string;
		}
	}
}

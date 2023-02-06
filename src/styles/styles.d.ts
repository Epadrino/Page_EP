import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;

		colors: {
			primary: string;
			secondary: string;
			tertiary: string;
		};
		backgrounds: {
			primary: string;
			secondary: string;
			tertiary: string;
			header: string;
			footer: string;
		};
		colors2: {
			primary: string;
			secondary: string;
			tertiary: string;
		};
		backgrounds2: {
			primary: string;
			secondary: string;
			tertiary: string;
			header: string;
			footer: string;
		};
		fonts: {
			primary: string;
			secondary: string;
			tertiary: string;
		};
	}
}

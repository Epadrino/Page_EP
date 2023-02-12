import { FC, useReducer, PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components';

import light from '@/styles/themes/light';
import { UIContext, uiReducer } from './';

export interface UIState {
	user: boolean;
	theme: string;
	themeJson: any;
}

const UI_INITIAL_STATE: UIState = {
	user: false,
	theme: 'light',
	themeJson: light,
};

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

	const changeTheme = () => {
		if (state.theme)
			state.theme === 'light'
				? dispatch({ type: '[UI] - ThemeDark' })
				: dispatch({ type: '[UI] - ThemeLight' });
		localStorage.setItem('theme', state.theme);
	};

	return (
		<UIContext.Provider
			value={{
				...state,

				//funtion
				changeTheme,
			}}
		>
			<ThemeProvider theme={state.themeJson}>{children}</ThemeProvider>
		</UIContext.Provider>
	);
};

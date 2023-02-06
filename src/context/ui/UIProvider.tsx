import { FC, useReducer, PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components';

import dark from '@/styles/themes/dark';
import { UIContext, uiReducer } from './';

export interface UIState {
	user: boolean;
	theme: string;
	themeJson: any;
}

const UI_INITIAL_STATE: UIState = {
	user: false,
	theme: 'dark',
	themeJson: dark,
};

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

	const changeTheme = () => {
		if (state.theme)
			state.theme === 'dark'
				? dispatch({ type: '[UI] - ThemeLigth' })
				: dispatch({ type: '[UI] - ThemeDark' });
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

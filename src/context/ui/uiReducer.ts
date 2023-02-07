import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';
import { UIState } from './';

type UIType = { type: '[UI] - ThemeDark' } | { type: '[UI] - ThemeLight' };

export const uiReducer = (state: UIState, action: UIType): UIState => {
	switch (action.type) {
		case '[UI] - ThemeLight':
			return {
				...state,
				theme: 'light',
				themeJson: light,
			};

		case '[UI] - ThemeDark':
			return {
				...state,
				theme: 'dark',
				themeJson: dark,
			};

		default:
			return state;
	}
};

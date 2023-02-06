import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';
import { UIState } from './';

type UIType = { type: '[UI] - ThemeDark' } | { type: '[UI] - ThemeLigth' };

export const uiReducer = (state: UIState, action: UIType): UIState => {
	switch (action.type) {
		case '[UI] - ThemeLigth':
			return {
				...state,
				theme: 'ligth',
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

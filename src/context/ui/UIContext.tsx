import { createContext } from 'react';

export interface ContextProps {
	user: boolean;
	theme: string;

	//funtion
	changeTheme: () => void;
}

export const UIContext = createContext({} as ContextProps);

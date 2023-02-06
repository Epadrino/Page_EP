import { FC, PropsWithChildren } from 'react';
import { roboto } from './fontsFamily';

export const Fonts: FC<PropsWithChildren> = ({ children }) => {
	return <main className={roboto.className}>{children}</main>;
};

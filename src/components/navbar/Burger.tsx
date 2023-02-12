import { RightNav } from './RightNav';
import { Nav, StyledBurger } from './burgerStyled';
import { useNavbar } from '@/hooks/useNavbar';
import { Toggle } from '../ui/botones/Toggle';

import { useContext } from 'react';
import { UIContext } from '@/context/ui';

export const Burger = () => {
	const { open, openNavbar } = useNavbar(false);

	const { theme } = useContext(UIContext);

	return (
		<>
			<StyledBurger open={open} open2={theme} onClick={() => openNavbar()}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<Nav>
				<RightNav open={open} />
				<Toggle />
			</Nav>
		</>
	);
};

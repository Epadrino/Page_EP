import { RightNav } from './RightNav';
import { Nav, StyledBurger } from './burgerStyled';
import { useNavbar } from '@/hooks/useNavbar';
import { Toggle } from '../ui/botones/Toggle';

export const Burger = () => {
	const { open, openNavbar } = useNavbar(false);

	return (
		<>
			<StyledBurger open={open} onClick={() => openNavbar()}>
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

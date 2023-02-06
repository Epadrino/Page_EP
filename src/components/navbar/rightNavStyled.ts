import { device } from '@/util/devices';

import styled from 'styled-components';

export const Nav = styled.div<{ open: boolean }>`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;

	div {
		padding: 18px 10px;
		color: ${(props) => props.theme.colors.primary};
		@media ${device.mobileS} {
		}
		@media ${device.tablet} {
		}
		@media ${device.desktopL} {
		}
	}
	@media ${device.menu} {
		flex-flow: column nowrap;
		background-color: ${(props) => props.theme.backgrounds.primary};
		position: fixed;
		transform: ${({ open }) =>
			open ? 'translateX(-100%)' : 'translateX(0%)'};
		top: -15px;
		right: -290px;
		height: 100vh;
		width: 250px;
		padding-top: 3.5rem;
		transition: transform 0.5s ease-in-out;
	}
`;

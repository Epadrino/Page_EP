import { device } from '@/util/devices';
import styled from 'styled-components';

export const StyledBurger = styled.div<{ open: boolean }>`
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 15px;
	right: 20px;
	z-index: 20;
	display: none;
	@media ${device.menu} {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}
	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? '#fff' : '#fff')};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;
		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}
		&:nth-child(2) {
			transform: ${({ open }) =>
				open ? 'translateX(100%)' : 'translateX(0)'};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

export const Nav = styled.div`
	display: flex;
	justify-content: right;
	align-items: center;
	padding-right: 100px;
`;

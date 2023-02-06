import { device } from '@/util/devices';
import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 100px;
	position: fixed;
	z-index: 30;

	background: ${(props) => props.theme.backgrounds.header};
`;

export const Footer = styled.div`
	position: relative;
	z-index: 30;
	width: 100%;
	height: 100px;

	background: ${(props) => props.theme.backgrounds.primary};
	div {
		display: flex;
		background: ${(props) => props.theme.backgrounds.footer};
		width: 100%;
		height: 100%;
		@media ${device.mobileS} {
			flex-direction: column;
			justify-content: center;
		}
		@media ${device.tablet} {
			flex-direction: row;
			justify-content: center;
		}
		@media ${device.desktop} {
			flex-direction: row;
			justify-content: center;
		}
		@media ${device.desktopL} {
			flex-direction: row;
		}
	}
`;

export const SectionLefth = styled.section`
	display: flex;
	align-items: center;

	@media ${device.mobileS} {
		justify-content: center;
		padding: 0;
		width: 100%;
	}
	@media ${device.tablet} {
		justify-content: left;
		padding-left: 40px;
		width: 50%;
	}
	@media ${device.desktop} {
		justify-content: left;
		padding-left: 40px;
		width: 50%;
	}
	@media ${device.desktopL} {
		justify-content: left;
		padding-left: 40px;
		width: 50%;
	}

	p {
		color: ${(props) => props.theme.colors.primary};
		@media ${device.mobileS} {
			margin-left: 0px;
		}
		@media ${device.tablet} {
			margin-left: 40px;
		}
	}
`;
export const SectionRigth = styled.section`
	display: flex;
	align-items: center;

	@media ${device.mobileS} {
		justify-content: center;
		width: 100%;
		height: 30%;
	}
	@media ${device.tablet} {
		justify-content: right;
		padding-right: 40px;
		width: 50%;
		height: 100%;
	}
	@media ${device.desktop} {
		justify-content: right;
		padding-right: 40px;
		width: 50%;
		height: 100%;
	}
	@media ${device.desktopL} {
		justify-content: right;
		padding-right: 40px;
		width: 50%;
		height: 100%;
	}
	section {
		@media ${device.mobileS} {
			justify-content: center;
			padding: 0 40px;
			width: 8%;
		}
		@media ${device.tablet} {
			justify-content: right;
			padding: 0 40px;
			width: 50%;
			height: 40%;
		}
		@media ${device.desktop} {
			justify-content: right;
			padding: 0 40px;
			width: 50%;
			height: 40%;
		}
		@media ${device.desktopL} {
			justify-content: right;
			padding: 0 40px;
			width: 50%;
			height: 40%;
		}
	}
`;

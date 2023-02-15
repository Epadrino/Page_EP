import { device } from '@/util/devices';
import styled from 'styled-components';

export const Box = styled.div`
	display: flex;
	justify-content: space-evenly;
	justify-content: center;
	align-items: initial;

	@media ${device.mobileS} {
		gap: 0px;
		flex-wrap: wrap;
		flex-direction: column;
	}
	@media ${device.tablet} {
		gap: 20px;
		flex-wrap: nowrap;
		flex-direction: row;
	}
	@media ${device.desktop} {
		gap: 20px;
		flex-wrap: nowrap;
		flex-direction: row;
	}
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 60vh;
`;

export const SectionMail = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;

	position: relative;

	@media ${device.mobileS} {
		width: 100%;
	}
	@media ${device.tablet} {
		width: 50%;
	}
	@media ${device.desktop} {
		width: 50%;
	}
	:hover {
		a {
			text-shadow: 1px 1px 2px #34b7f1;
		}
	}
	div {
		width: 100%;
		height: 100%;
	}
	p {
		margin: 0px;
		padding: 10px 0px;

		@media ${device.mobileS} {
			width: 90%;
			font-size: 14px;
		}
		@media ${device.tablet} {
			width: 80%;
			font-size: 16px;
		}
		@media ${device.desktop} {
			width: 70%;
			font-size: 20px;
		}
	}
	a {
		text-decoration: none;
		:focus {
			background: ${(props) => props.theme.backgrounds.header};
		}

		:link {
			color: ${(props) => props.theme.colors.primary};
		}
		:visited {
			color: ${(props) => props.theme.colors.primary};
		}
	}
`;

export const SectionWhasApp = styled(SectionMail)`
	:hover {
		a {
			text-shadow: 1px 1px 2px #25d366;
		}
	}
`;

export const SectionForm = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;

	@media ${device.mobileS} {
		width: 100%;
	}
	@media ${device.tablet} {
		width: 50%;
	}
	@media ${device.desktop} {
		width: 50%;
	}
`;

export const Img = styled.div`
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 0px;

	@media ${device.mobileS} {
		width: 20%;
		height: 20%;
	}
	@media ${device.tablet} {
		width: 20%;
		height: 50%;
	}
	@media ${device.desktop} {
		width: 20%;
		height: 50%;
	}
`;

import { device } from '@/util/devices';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	height: 100%;
	background: rgba(0, 0, 0, 0);
	position: relative;
	z-index: 10;
`;

export const Box = styled.div`
	position: relative;
	width: 100%;
`;
export const ContainerImg = styled.div`
	object-fit: cover;
	position: fixed;

	top: 0;
	left: 0;
	width: 100vw;
	height: 85vh;
	z-index: 1;
	@media ${device.mobileS} {
		min-height: 500px;
	}
	@media ${device.tablet} {
		min-height: 500px;
	}
`;
export const ContainerText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 20;
	height: 85vh;

	h1 {
		color: ${(props) => props.theme.colors.tertiary};
		font-weight: 900;
		@media ${device.mobileS} {
			padding-left: 10vw;
			width: 80vw;
			font-size: 40px;
		}
		@media ${device.tablet} {
			padding-left: 10vw;
			width: 50vw;
			font-size: 35px;
		}
		@media ${device.laptop} {
			padding-left: 10vw;
			width: 50vw;
			font-size: 35px;
		}

		@media ${device.desktop} {
			padding-left: 10vw;
			width: 50vw;
			font-size: 70px;
		}
	}
	h2 {
		color: ${(props) => props.theme.colors.tertiary};
		font-weight: 700;

		@media ${device.mobileS} {
			padding-left: 10vw;
			font-size: 20px;
		}
		@media ${device.tablet} {
			padding-left: 10vw;
			font-size: 20px;
		}
		@media ${device.desktop} {
			padding-left: 10vw;
			font-size: 20px;
		}
	}
`;

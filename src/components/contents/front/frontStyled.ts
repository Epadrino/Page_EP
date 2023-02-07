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
	padding-left: 10vw;
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;

		background: rgba(26, 26, 27, 0.1);
		width: 35%;

		border-radius: 20px;
		padding-left: 5%;
		h1 {
			color: ${(props) => props.theme.colors.primary};
			font-weight: 900;

			@media ${device.mobileS} {
				width: 80vw;
				font-size: 40px;
			}
			@media ${device.tablet} {
				width: 50vw;
				font-size: 35px;
			}
			@media ${device.laptop} {
				width: 50vw;
				font-size: 35px;
			}

			@media ${device.desktop} {
				width: 50vw;
				font-size: 70px;
			}
		}
		h2 {
			color: ${(props) => props.theme.colors.primary};
			font-weight: 700;

			@media ${device.mobileS} {
				font-size: 20px;
			}
			@media ${device.tablet} {
				font-size: 20px;
			}
			@media ${device.desktop} {
				font-size: 20px;
			}
		}
	}
`;

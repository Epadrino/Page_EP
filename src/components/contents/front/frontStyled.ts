import { device } from '@/util/devices';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 40px;
	height: 94vh;
	background: rgba(0, 0, 0, 0);
	position: relative;
	z-index: 10;
`;
export const ContainerImg = styled.div`
	position: absolute;
	position: fixed;
	object-fit: cover;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 500px;
	height: 100%;
	z-index: 1;
`;

export const ContainerText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 20;
	position: absolute;
	height: 90vh;
	padding-left: 10vw;
	h1 {
		color: ${(props) => props.theme.colors.primary};
		font-weight: 900;
		@media ${device.mobileS} {
			font-size: 300%;
			width: 80vw;
		}
		@media ${device.tablet} {
			width: 50vw;
			font-size: 70px;
		}
		@media ${device.desktop} {
			width: 50vw;
			font-size: 70px;
		}
	}
	h2 {
		color: ${(props) => props.theme.colors.primary};
		font-weight: 700;
		font-size: 20px;
	}
`;

export const Title = styled.h1``;
export const SubTitle = styled.h2`
	font-weight: 700;
	font-size: 20px;
`;

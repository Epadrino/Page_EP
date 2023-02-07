import { device } from '@/util/devices';
import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	background: ${(props) => props.theme.backgrounds.primary};
	z-index: 10;
	@media ${device.mobileS} {
		padding: 20px 15px;
	}
	@media ${device.tablet} {
		padding: 20px 40px;
	}
`;
export const Separator = styled.div`
	position: absolute;
	width: 100%;
	height: 5%;
	z-index: 10;
	top: -17px;
	left: 0px;

	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 0) 25%,
		${(props) => props.theme.backgrounds.primary} 50%,
		rgba(255, 255, 255, 0) 75%
	); ;
`;

export const ContainerTitle = styled.div`
	display: flex;
	align-items: center;
	height: 20%;
`;

export const Title = styled.h2`
	position: relative;
	margin: 30px;
	width: max-content;

	@media ${device.mobileS} {
		font-size: 30px;
	}
	@media ${device.tablet} {
		font-size: 40px;
	}
`;

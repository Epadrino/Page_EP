import { device } from '@/util/devices';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 20px 40px;
	height: 650px;
	background: ${(props) => props.theme.backgrounds.primary};
	z-index: 10;
`;

export const ContainerTitle = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: left;
	height: 20%;
`;

export const Title = styled.h2`
	position: relative;
	margin: 30px;
	font-size: 40px;

	:after {
		content: '';
		height: 15px;
		position: absolute;
		bottom: -10px;
		left: 0;
		right: 0;
		background-image: linear-gradient(
			0deg,
			rgba(255, 255, 255, 0) 25%,
			${(props) => props.theme.backgrounds.secondary} 50%,
			rgba(255, 255, 255, 0) 75%
		);
	}
	@media ${device.mobileS} {
		font-size: 30px;
	}
	@media ${device.tablet} {
		width: max-content;
		font-size: 40px;
	}
`;

export const ContainerLogos = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	gap: 20px;
	width: 100%;
	height: 60%;
`;

export const ContainerLogo = styled.div`
	display: flex;

	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${(props) => props.theme.backgrounds.header};
	border-radius: 10px;
	position: relative;

	:after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}

	transition-duration: 2s;
	:hover {
		transform: translateY(-20px);

		box-shadow: 5px 10px 10px
			${(props) => props.theme.backgrounds.secondary};
	}
	@media ${device.mobileS} {
		width: 100px;
	}
	@media ${device.tablet} {
		width: 200px;
	}
	@media ${device.laptop} {
		width: 180px;
	}
	@media ${device.laptopL} {
		width: 200px;
	}
	@media ${device.desktop} {
		width: 250px;
	}
`;

export const Logo = styled.div`
	position: absolute;
	width: 80%;
	height: 60%;
`;

export const NameLogo = styled.h4`
	margin: 0px;
	padding: 10%;
	text-align: center;
	@media ${device.mobileS} {
		font-size: 15px;
	}
	@media ${device.tablet} {
		font-size: 20px;
	}
	@media ${device.laptop} {
		font-size: 20px;
	}
	@media ${device.laptopL} {
		font-size: 20px;
	}
	@media ${device.desktop} {
		font-size: 30px;
	}
`;

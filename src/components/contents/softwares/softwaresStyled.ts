import { device } from '@/util/devices';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const ContainerLogos = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	gap: 10%;
	width: 80%;
	height: 50%;
	@media ${device.mobileS} {
		width: 100%;
	}
	@media ${device.tablet} {
		width: 80%;
	}
	@media ${device.laptop} {
		width: 80%;
	}
	@media ${device.laptopL} {
		width: 80%;
	}
	@media ${device.desktop} {
		width: 70%;
	}
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

		box-shadow: 5px 10px 10px ${(props) => props.theme.backgrounds.secondary};
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

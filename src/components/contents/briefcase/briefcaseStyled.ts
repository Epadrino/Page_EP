import { device } from '@/util/devices';
import styled from 'styled-components';

export const ContainerCard = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	gap: 20px;
	width: 100%;
	height: 60%;
`;

export const Card = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-direction: row;

	align-items: center;
	background: ${(props) => props.theme.backgrounds.header};
	border-radius: 50px;

	height: 400px;
	transition-duration: 200ms;
	:hover {
		transform: translateY(-10px);
		box-shadow: 0px 5px 5px ${(props) => props.theme.backgrounds.secondary};
	}

	@media ${device.mobileS} {
		flex-direction: column;
		width: 100%;
	}
	@media ${device.tablet} {
		flex-direction: row;
		width: 100%;
	}
	@media ${device.laptop} {
		flex-direction: row;
		width: 90%;
	}
	@media ${device.desktop} {
		flex-direction: row;
		width: 70%;
	}
`;
export const BoxContend = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 40%;
	@media ${device.mobileS} {
		width: 90%;
	}
	@media ${device.tablet} {
		width: 40%;
	}

	h4 {
		font-size: 30px;
		margin: 0;
	}
	p {
		font-size: 20px;
		height: 100%;

		a {
			outline: none;
			text-decoration: none;
			width: 19.5%;
			margin-left: 0.625%;
			text-align: center;
			color: ${(props) => props.theme.colors.primary};
			box-shadow: 0.5px 0.5px 5px ${(props) => props.theme.colors.primary};
			padding: 3px 5px;
			border-radius: 5px;
			transition-duration: 200ms;
			:link,
			:visited,
			:focus {
				background: ${(props) => props.theme.backgrounds.primary};
			}

			:hover {
				background: ${(props) => props.theme.backgrounds.secondary};
				color: ${(props) => props.theme.colors.secondary};
			}

			:active {
				background: ${(props) => props.theme.backgrounds.primary};
				color: ${(props) => props.theme.colors.primary};
			}
		}
	}
`;
export const BoxLogo = styled.div`
	width: 50%;
	height: 80%;
	margin: 20px;

	@media ${device.mobileS} {
		width: 80%;
	}
	@media ${device.tablet} {
		width: 40%;
	}
	@media ${device.laptop} {
		width: 40%;
	}
	@media ${device.desktop} {
		width: 40%;
	}
`;
export const Logo = styled.div`
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 100%;

	box-shadow: 0px 0px 5px ${(props) => props.theme.colors.primary};
`;

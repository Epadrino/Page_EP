import { SVG } from '@/components/icons/IconMail';
import { device } from '@/util/devices';
import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 20px 40px;
	height: 75vh;

	background: ${(props) => props.theme.backgrounds.primary};
	z-index: 10;
`;

export const ContainerTitle = styled.div`
	display: flex;
	align-items: center;
	height: 20%;
`;

export const Title = styled.h2`
	position: relative;
	margin: 30px;
	font-size: 40px;
	width: max-content;

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
		font-size: 40px;
	}
`;
export const Box = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	height: 100%;
	border-top: 2px solid ${(props) => props.theme.backgrounds.secondary};
	border-bottom: 2px solid ${(props) => props.theme.backgrounds.secondary};
	border-radius: 20px;
	@media ${device.mobileS} {
		gap: 0px;
		flex-wrap: wrap;
	}
	@media ${device.tablet} {
		gap: 20px;
		flex-wrap: nowrap;
	}
	@media ${device.desktop} {
		gap: 20px;
		flex-wrap: nowrap;
	}
	justify-content: center;
`;
export const Section = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: auto;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background: ${(props) => props.theme.backgrounds.primary};

	color: white;

	@media ${device.mobileS} {
		padding: 0px 30px;
		width: 70vw;
		height: 40vh;
	}
	@media ${device.tablet} {
		padding: 20px 30px;
		width: 30vw;
		height: 30vh;
	}
	@media ${device.desktop} {
		padding: 20px 30px;
		width: 40vw;
		height: 40vh;
	}

	input {
		border-radius: 5px;
		width: 100%;
		margin-bottom: 10px;
		padding: 15px 0px;
		background: ${(props) => props.theme.colors.secondary};
		font-size: 16px;
		font-weight: bold;
		color: ${(props) => props.theme.colors.primary};
		:focus {
			box-shadow: 0px 0px 10px ${(props) => props.theme.colors.primary};
		}
		@media ${device.mobileS} {
			padding: 10px 0px;
		}
		@media ${device.tablet} {
			padding: 15px 0px;
		}
		@media ${device.desktop} {
			padding: 15px 0px;
		}
	}
	textarea {
		border-radius: 5px;
		width: 100%;

		margin-bottom: 15px;
		padding: 11px 0;
		background: ${(props) => props.theme.colors.secondary};
		color: ${(props) => props.theme.colors.primary};
		font-size: 14px;
		font-weight: bold;
		resize: none;
	}
	.button {
		width: 70%;
		height: 40px;
		background: ${(props) => props.theme.backgrounds.secondary};
		border: none;
		color: ${(props) => props.theme.colors.secondary};
		margin-bottom: 16px;
	}
`;
export const Img = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	border-radius: 20px;
	padding: 20px;

	@media ${device.mobileS} {
		width: 30vw;
		height: 10vh;
	}
	@media ${device.tablet} {
		width: 35vw;
		height: 35vh;
	}
	@media ${device.desktop} {
		width: 40vw;
		height: 40vh;
	}
`;

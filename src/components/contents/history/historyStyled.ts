import { device } from '@/util/devices';
import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 20px 40px;
	height: 650px;
	background: ${(props) => props.theme.backgrounds.primary};
	z-index: 10;
`;

export const ContainerContents = styled.div`
	display: flex;
	width: 100%;

	@media ${device.mobileXS} {
		justify-content: center;
		flex-wrap: wrap;
	}
	@media ${device.tablet} {
		justify-content: center;
		flex-wrap: nowrap;
	}
	@media ${device.desktop} {
		justify-content: center;
		flex-wrap: nowrap;
	}
`;

export const ContainerDescription = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0px;
	padding: 0px;
	@media ${device.mobileXS} {
		font-size: 14px;
	}
	@media ${device.tablet} {
		font-size: 16px;
	}
	@media ${device.laptop} {
		font-size: 20px;
	}

	h2 {
		margin: 0px;
		padding: 10px 0px 10px 5px;
	}
	p {
		font-size: 20px;
		margin: 15px;
		@media ${device.mobileXS} {
			font-size: 14px;
		}
		@media ${device.tablet} {
			font-size: 16px;
		}
		@media ${device.laptop} {
			font-size: 20px;
		}
	}

	@media ${device.mobileXS} {
		margin: 10px;
		width: 70vw;
	}
	@media ${device.tablet} {
		margin: 30px;
		width: 40vw;
	}
	@media ${device.desktop} {
		margin: 50px;
		width: 40vw;
	}
`;

export const ContainerImg = styled.div`
	display: flex;
	justify-content: center;
	border-radius: 50px;
	background: linear-gradient(
		45deg,
		rgba(238, 174, 202, 0) 0%,
		${(props) => props.theme.colors.secondary} 20%,
		${(props) => props.theme.colors.secondary} 60%,
		rgba(148, 187, 233, 0) 100%
	);

	@media ${device.mobileS} {
		flex-wrap: wrap;
		width: auto;
		height: auto;
		padding: 0px 20px;
	}
	@media ${device.tablet} {
		flex-wrap: no-wrap;
		width: 50%;
		height: auto;
		padding: 0px 20px;
	}
	@media ${device.desktop} {
		flex-wrap: no-wrap;
		width: auto;
		height: auto;
		padding: 0px 20px;
	}
`;

export const ContainerLogo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;

	@media ${device.mobileXS} {
		width: 200px;
		height: 200px;
	}
	@media ${device.tablet} {
		width: 400px;
		height: 400px;
	}
	@media ${device.desktop} {
		width: 500px;
		height: 500px;
	}
	@media ${device.desktopL} {
		width: 600px;
		height: 600px;
	}
`;

export const Logo = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	width: 50%;
	height: 50%;
	border-radius: 50px;

	transition-duration: 2s;
	${ContainerContents}:hover & {
		background-color: ${(props) => props.theme.backgrounds.tertiary};
		width: 60%;
		left: 40%;
	}
`;

export const Logo1 = styled.div`
	position: absolute;
	left: 25%;
	top: 25%;
	width: 50%;
	height: 50%;
	border-radius: 50px;

	transition-duration: 2s;
	${ContainerContents}:hover & {
		background-color: ${(props) => props.theme.backgrounds.tertiary};
		width: 60%;
		left: 20%;
	}
`;

export const Logo2 = styled.div<{}>`
	position: absolute;
	left: 0%;
	top: 0%;
	width: 50%;
	height: 50%;
	border-radius: 50px;

	transition-duration: 2s;
	${ContainerContents}:hover & {
		background-color: ${(props) => props.theme.backgrounds.tertiary};
		width: 60%;
	}
`;

export const Logo3 = styled.div`
	position: absolute;
	left: 0%;
	top: 0%;
	width: 50%;
	height: 50%;
	${ContainerContents}:hover & {
		animation-name: muve2;
		animation-duration: 3s;
		animation-iteration-count: 1;
		animation-fill-mode: backwards;
	}
	@keyframes muve2 {
		0% {
			transform: translateX(-0%) translateY(-0%);
		}
		25% {
			transform: translateX(100%) translateY(0%);
		}
		50% {
			transform: translateX(100%) translateY(100%);
		}
		75% {
			transform: translateX(100%) translateY(-0%);
		}
		100% {
			transform: translateX(0%) translateY(0%);
		}
	}
`;

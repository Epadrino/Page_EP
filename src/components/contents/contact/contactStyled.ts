import { device } from '@/util/devices';
import styled from 'styled-components';

export const Box = styled.div`
	display: flex;
	justify-content: space-evenly;
	justify-content: center;
	width: 100%;
	height: 100%;

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
export const SectionMail = styled.section`
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
	div {
		width: 80%;
	}
	p {
		margin: 0;

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
		transition-duration: 1s;
		text-decoration: none;
		:focus {
			border-bottom: 1px solid;
			background: ${(props) => props.theme.backgrounds.header};
		}

		:link {
			color: ${(props) => props.theme.colors.primary};
		}
		:visited {
			color: ${(props) => props.theme.colors.primary};
		}
		:hover {
			border-bottom: 1px solid;
			border-radius: 5px;
			background: ${(props) => props.theme.backgrounds.primary};
			color: ${(props) => props.theme.colors.secondary};
		}
		${Box}:hover & {
			color: #a3ff0f;
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

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	border-top: 2px solid ${(props) => props.theme.backgrounds.secondary};
	border-bottom: 2px solid ${(props) => props.theme.backgrounds.secondary};
	border-radius: 20px;

	background: ${(props) => props.theme.backgrounds.primary};

	color: white;

	@media ${device.mobileS} {
		padding: 5px 30px;
		width: 70vw;
		height: 40vh;
	}
	@media ${device.tablet} {
		padding: 20px 30px;
		width: 80%;
		height: 70%;
	}
	@media ${device.desktop} {
		padding: 20px 30px;
		width: 60%;
		height: 70%;
	}
	label {
		text-align: left;
		margin-bottom: 3px;
		@media ${device.mobileS} {
			font-size: 12px;
		}
		@media ${device.tablet} {
			font-size: 16px;
		}
	}
	input {
		border-radius: 5px;
		width: 100%;
		margin-bottom: 10px;
		padding: 15px 0px;
		background: ${(props) => props.theme.colors.secondary};
		font-size: 16px;

		color: ${(props) => props.theme.colors.primary};
		:focus {
			box-shadow: 0px 0px 10px ${(props) => props.theme.colors.primary};
		}
		::placeholder {
			padding-left: 10px;
		}
		@media ${device.mobileS} {
			padding: 10px 0px;
			font-size: 12px;
		}
		@media ${device.tablet} {
			padding: 15px 0px;
			font-size: 16px;
		}
		@media ${device.desktop} {
			padding: 15px 0px;
			font-size: 16px;
		}
	}
	textarea {
		border-radius: 5px;
		width: 100%;
		height: 100%;

		margin-bottom: 15px;
		padding: 11px 0;
		background: ${(props) => props.theme.colors.secondary};
		color: ${(props) => props.theme.colors.primary};
		font-size: 16px;

		resize: none;
		::placeholder {
			padding-left: 10px;
			font-family: '__Roboto_eb08c1', '__Roboto_Fallback_eb08c1';
		}
	}
	.button {
		display: block;
		padding: auto;
		margin: 0;
		background: ${(props) => props.theme.backgrounds.secondary};
		border: none;
		color: ${(props) => props.theme.colors.secondary};
	}
`;
export const Img = styled.div`
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 20px;
	border-radius: 20px;

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

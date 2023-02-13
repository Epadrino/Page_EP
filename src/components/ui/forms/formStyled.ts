import styled from 'styled-components';

import { device } from '@/util/devices';

export const Container = styled.form`
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
			box-shadow: 0px 0px 10px ${(props) => props.theme.shadow.primary};
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

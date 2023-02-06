import styled from 'styled-components';

export const Nav = styled.nav`
	width: 100%;
	height: 55px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.logo {
		padding: 0px 5vw;
		h1 {
			color: ${(props) => props.theme.colors.primary};
			font-size: 20px;
			margin: 0;
			b {
				color: ${(props) => props.theme.colors.primary};
				font-size: 40px;
			}
		}
	}
`;

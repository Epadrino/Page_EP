import styled from 'styled-components';

export const Enlaces = styled.a`
	width: 100%;
	font-size: 18px;
	font-weight: 700;
	text-align: center;
	text-decoration: none;

	color: ${(props) => props.theme.colors.primary};
`;

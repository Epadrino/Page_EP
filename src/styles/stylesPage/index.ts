import styled from 'styled-components';

export const ContainerImg = styled.div`
	position: relative;
	width: 100vw;
	height: 90vh;
	z-index: 10;
`;

export const ContainerText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 20;
	position: absolute;
	width: 50vw;
	height: 90vh;
	padding-left: 10vw;
`;

export const Title = styled.h1`
	font-weight: 900;
	font-size: 70px;
`;
export const SubTitle = styled.h2`
	font-weight: 700;
	font-size: 20px;
`;

import Image from 'next/image';
import React from 'react';
import { Container, Box, ContainerImg, ContainerText } from './frontStyled';

export const Front = () => {
	return (
		<Container>
			<Container>
				<ContainerText>
					<h1>Eduardo E. Padrino A.</h1>
					<h2>Desarrollador Frontend.</h2>
				</ContainerText>
			</Container>
			<Box>
				<ContainerImg>
					<Image
						src="/images/fondo-azul-2.jpg"
						alt="fondo"
						sizes="100vw"
						fill
						priority
					/>
				</ContainerImg>
			</Box>
		</Container>
	);
};

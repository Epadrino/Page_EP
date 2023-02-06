import Image from 'next/image';
import React from 'react';
import {
	Container,
	ContainerImg,
	ContainerText,
	SubTitle,
} from './frontStyled';

export const Front = () => {
	return (
		<>
			<Container>
				<ContainerText>
					<h1>Front Developer</h1>
					<SubTitle>Diseños hecho realidad</SubTitle>
				</ContainerText>
			</Container>
			<ContainerImg>
				<Image
					src="/images/fondo-azul-2.jpg"
					alt="fondo"
					sizes="100vw"
					fill
					priority
				/>
			</ContainerImg>
		</>
	);
};

import Image from 'next/image';
import React from 'react';
import { Container, Box, ContainerImg, ContainerText } from './frontStyled';

import { AnimationParticles } from '@/components/praticles/AnimationParticles';

export const Front = () => {
	return (
		<Container>
			<Container>
				<ContainerText>
					<div>
						<h1>Eduardo Padrino </h1>
						<h2>DESARROLLADOR WEB</h2>
					</div>
				</ContainerText>
			</Container>
			<Box>
				<ContainerImg>
					<AnimationParticles />
					{/* <Image
						src="/images/fondo-azul-2.jpg"
						alt="fondo"
						sizes="100vw"
						fill
						priority
					/> */}
				</ContainerImg>
			</Box>
		</Container>
	);
};

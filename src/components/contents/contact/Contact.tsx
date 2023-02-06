import { IconMail } from '@/components/icons/IconMail';
import React from 'react';

import {
	Box,
	Container,
	ContainerTitle,
	Form,
	Img,
	Section,
	Title,
} from './contactStyled';

export const Contact = () => {
	return (
		<Container>
			<ContainerTitle>
				<Title>Contactame</Title>
			</ContainerTitle>
			<Box>
				<Section>
					<Img>
						<IconMail
							width="35vh"
							height="35vh"
						/>
					</Img>
				</Section>
				<Section>
					<Form>
						<input
							type="text"
							placeholder="Nombre"
							required
							minLength={4}
						/>
						<input
							type="email"
							placeholder="Correo@ejemplo.com"
							required
							minLength={4}
						/>
						<textarea
							name="sms"
							id="sms"
							cols={30}
							rows={10}
							placeholder="Breve Comentario"
							autoCapitalize="words"
							minLength={4}
							required
						/>
						<input
							className="button"
							type="submit"
						/>
					</Form>
				</Section>
			</Box>
		</Container>
	);
};

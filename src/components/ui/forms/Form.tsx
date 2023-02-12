import React from 'react';
import { Container } from './formStyled';

export const Form = () => {
	return (
		<Container>
			<label htmlFor="nombre">Nombre:</label>
			<input
				type="text"
				placeholder="ingresa tu Nombre"
				required
				minLength={4}
			/>
			<label htmlFor="nombre">Direcion de correo electronico:</label>
			<input
				type="email"
				placeholder="Ingresa tu correo"
				required
				minLength={4}
			/>
			<label htmlFor="nombre">Mensaje:</label>
			<textarea
				name="sms"
				id="sms"
				cols={30}
				rows={10}
				placeholder="Ingresa un breve comentario"
				autoCapitalize="words"
				minLength={4}
				required
			/>
			<input className="button" type="submit" />
		</Container>
	);
};

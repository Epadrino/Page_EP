import { IconMail } from '@/components/icons/IconMail';
import { LayoutPage } from '@/components/layout/LayoutPage';
import React from 'react';

import { Box, Form, Img, SectionMail, SectionForm } from './contactStyled';

export const Contact = () => {
	return (
		<LayoutPage title="CONTÁCTAME">
			<Box>
				<SectionMail>
					<p>
						Escríbeme a través del siguiente formulario o envíame un correo
						electrónico a{' '}
						<a href="mailto:epadrinoa@gmail.com">
							<b>epadrinoa@gmail.com</b>
						</a>
					</p>

					<Img>
						<IconMail
							width="100%"
							height="100%"
						/>
					</Img>
				</SectionMail>
				<SectionForm>
					<Form>
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
						<input
							className="button"
							type="submit"
						/>
					</Form>
				</SectionForm>
			</Box>
		</LayoutPage>
	);
};

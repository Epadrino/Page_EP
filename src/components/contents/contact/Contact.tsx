import React from 'react';

import {
	Box,
	Container,
	Img,
	SectionMail,
	SectionWhasApp,
} from './contactStyled';
import { LayoutPage } from '@/components/layout/LayoutPage';
import { IconMail, IconWhatsApp } from '@/components/ui/icons';

export const Contact = () => {
	return (
		<LayoutPage title="CONTÁCTAME" id="contactame">
			<Container>
				<Box>
					<SectionMail>
						<p>
							Escríbeme a través de mi correo electrónico a{' '}
							<a href="mailto:epadrinoa@gmail.com">
								<b>epadrinoa@gmail.com</b>
							</a>
						</p>
						<a href={'mailto:epadrinoa@gmail.com'}>
							<Img>
								<IconMail width="80%" height="80%" />
							</Img>
						</a>
					</SectionMail>
					<SectionWhasApp>
						<p>
							Escríbeme a través de WhatsApp por el numero{' '}
							<a href="https://api.whatsapp.com/send/?phone=584145625041&text&type=phone_number&app_absent=0">
								<b>+58 4145625041</b>
							</a>
						</p>
						<a
							href={
								'https://api.whatsapp.com/send/?phone=584145625041&text&type=phone_number&app_absent=0'
							}
						>
							<Img>
								<IconWhatsApp width="70%" height="70%" />
							</Img>
						</a>
					</SectionWhasApp>
				</Box>
			</Container>
		</LayoutPage>
	);
};

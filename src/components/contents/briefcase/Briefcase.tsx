import React from 'react';

import Image from 'next/image';

import { LayoutPage } from '../../layout/LayoutPage';
import { BriefcaseData } from './briefcaseData';

import {
	BoxContend,
	BoxLogo,
	Card,
	ContainerCard,
	Logo,
} from './briefcaseStyled';

export const Briefcase = () => {
	return (
		<LayoutPage title="PORTAFOLIO" id="portafolio">
			<ContainerCard>
				{BriefcaseData.projects.map((projects) => (
					<Card key={projects.key}>
						<BoxLogo>
							<Logo>
								<Image src={projects.img} alt="img" fill sizes="40vw" />
							</Logo>
						</BoxLogo>
						<BoxContend>
							<h4>{projects.titleDescription}</h4>
							<p>
								{projects.description} <br />
								<br />
								ir a:{' '}
								<a href={projects.url} target="_blank">
									{projects.title}
								</a>
							</p>
						</BoxContend>
					</Card>
				))}
			</ContainerCard>
		</LayoutPage>
	);
};

import { LayoutPage } from '@/components/layout/LayoutPage';
import Image from 'next/image';
import React from 'react';
import {
	Container,
	ContainerLogo,
	ContainerLogos,
	Logo,
	NameLogo,
} from './softwaresStyled';

export const Softwares = () => {
	return (
		<LayoutPage
			title="HERRAMIENTAS DE TRABAJO"
			id="herramientas"
		>
			<Container>
				<ContainerLogos>
					<ContainerLogo>
						<Logo>
							<Image
								src="/icons/html.png"
								alt="img"
								fill
								sizes="10vw"
							/>
						</Logo>
						<NameLogo>HTML</NameLogo>
					</ContainerLogo>
					<ContainerLogo>
						<Logo>
							<Image
								src="/icons/css.png"
								alt="img"
								fill
								sizes="10vw"
							/>
						</Logo>
						<NameLogo>CSS</NameLogo>
					</ContainerLogo>
					<ContainerLogo>
						<Logo>
							<Image
								src="/icons/javaScript.png"
								alt="img"
								fill
								sizes="10vw"
							/>
						</Logo>
						<NameLogo>JavaScript</NameLogo>
					</ContainerLogo>
					<ContainerLogo>
						<Logo>
							<Image
								src="/icons/react.png"
								alt="img"
								fill
								sizes="10vw"
							/>
						</Logo>
						<NameLogo>REACT</NameLogo>
					</ContainerLogo>
					<ContainerLogo>
						<Logo>
							<Image
								src="/icons/next.png"
								alt="img"
								fill
								sizes="10vw"
							/>
						</Logo>
						<NameLogo>Next.JS</NameLogo>
					</ContainerLogo>
					<ContainerLogo>
						<Logo>
							<Image
								src="/icons/styled-componts.png"
								alt="img"
								fill
								sizes="10vw"
							/>
						</Logo>
						<NameLogo>Styled</NameLogo>
					</ContainerLogo>
				</ContainerLogos>
			</Container>
		</LayoutPage>
	);
};

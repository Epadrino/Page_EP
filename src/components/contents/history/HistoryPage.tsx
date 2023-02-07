import { IconWindow } from '@/components/icons/IconWindow';
import { LayoutPage } from '@/components/layout/LayoutPage';
import {
	Container,
	ContainerContents,
	ContainerDescription,
	ContainerImg,
	ContainerLogo,
	Logo,
	Logo1,
	Logo2,
} from './historyStyled';

export const HistoryPage = () => {
	return (
		<LayoutPage title="ACERCA DE MI">
			<ContainerContents>
				<ContainerImg>
					<ContainerLogo>
						<Logo2>
							<IconWindow
								width="100%"
								height="100%"
							/>
						</Logo2>
						<Logo1>
							<IconWindow
								width="100%"
								height="100%"
							/>
						</Logo1>
						<Logo>
							<IconWindow
								width="100%"
								height="100%"
							/>
						</Logo>
					</ContainerLogo>
				</ContainerImg>
				<ContainerDescription>
					<p>Saludos mi nombre es </p>

					<h2>Eduardo E. Padrino A.</h2>

					<p>
						un nómada digital alojado en Venezuela, actualmente me identifico
						como Front-end Developer autodidacta. Me encanta aprender nuevas
						tecnologías en plataformas como Platzi, Udemy y Youtube, sobre
						WordPress, HTML, CSS, React, Styled Componets, Next.js, y continúo
						ampliando y consolidando mi formación con el fin de garantizar la
						mejor experiencia para el usuario final.
					</p>
				</ContainerDescription>
			</ContainerContents>
		</LayoutPage>
	);
};

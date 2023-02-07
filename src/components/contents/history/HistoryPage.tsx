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
						EDUARDO PADRINO - Nómada digital, "front-end developer" autodidacta.
						Aprendo nuevas tecnologías en Platzi, Udemy sobre WordPress, HTML,
						CSS, React, Styled Components, Next.js. Actualmente continuo
						ampliando y consolidando mi formación, para brindar a todos los
						usuarios la mejor experiencia.
					</p>
				</ContainerDescription>
			</ContainerContents>
		</LayoutPage>
	);
};

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
					<p>
						Autodidacta, desde 2022 he trabajado con pequeños equipos ágiles de
						proyectos.
					</p>
					<p>
						Hábil y comprometido con las nuevas tecnologías en Platzi, Udemy
						sobre WordPress, HTML, CSS, React, Styled Components, Next.js.
					</p>
					<p>
						Valoro los detalles que importan, con experiencia y el entusiasmo
						puedo traer tus visiones a la vida de la manera que quieras.
					</p>
					<p>¿Tienes un proyecto interesante? Vamos a hablar.</p>
				</ContainerDescription>
			</ContainerContents>
		</LayoutPage>
	);
};

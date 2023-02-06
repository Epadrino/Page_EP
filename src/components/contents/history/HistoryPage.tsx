import { IconWindow } from '@/components/icons/IconWindow';
import {
	Container,
	ContainerContents,
	ContainerDescription,
	ContainerImg,
	ContainerLogo,
	ContainerTitle,
	Logo,
	Logo1,
	Logo2,
	Separator,
	Title,
} from './historyStyled';

export const HistoryPage = () => {
	return (
		<Container>
			<Separator />
			<ContainerTitle>
				<Title>Acerca de mi</Title>
			</ContainerTitle>
			<ContainerContents>
				<ContainerImg>
					<ContainerLogo>
						<Logo2>
							<IconWindow width='100%' height='100%' />
						</Logo2>
						<Logo1>
							<IconWindow width='100%' height='100%' />
						</Logo1>
						<Logo>
							<IconWindow width='100%' height='100%' />
						</Logo>
					</ContainerLogo>
				</ContainerImg>
				<ContainerDescription>
					<p>mi nombre es </p>

					<h2>Eduardo Padrino</h2>

					<p>
						Soy un front develor que le gustan los retos, dispuesto
						a mejorar y aprender nuevas habilidades, con el de fin
						garantizar y dar la mejor esperiencia para el usuario
					</p>
				</ContainerDescription>
			</ContainerContents>
		</Container>
	);
};

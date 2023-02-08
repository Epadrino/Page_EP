import { FC, PropsWithChildren } from 'react';
import {
	Container,
	ContainerTitle,
	Separator,
	Title,
} from './layoutPageStyled';

interface Props {
	title: string;
	id: string;
}
export const LayoutPage: FC<PropsWithChildren<Props>> = ({
	title,
	children,
	id,
}) => {
	return (
		<Container id={id}>
			<Separator />
			<ContainerTitle>
				<Title>{title}</Title>
			</ContainerTitle>
			{children}
		</Container>
	);
};

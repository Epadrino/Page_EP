import { FC, PropsWithChildren } from 'react';
import {
	Container,
	ContainerTitle,
	Separator,
	Title,
} from './layoutPageStyled';

interface Props {
	title: string;
}
export const LayoutPage: FC<PropsWithChildren<Props>> = ({
	title,
	children,
}) => {
	return (
		<Container>
			<Separator />
			<ContainerTitle>
				<Title>{title}</Title>
			</ContainerTitle>
			{children}
		</Container>
	);
};

import { EnlaceMenu } from '@/components/enlaces';

import { FC, PropsWithChildren } from 'react';
import { Nav } from './rightNavStyled';

interface Props {
	open: boolean;
}

export const RightNav: FC<PropsWithChildren<Props>> = ({ open }) => {
	return (
		<Nav open={open}>
			<div>
				<EnlaceMenu
					text="Inicio"
					href="#inicio"
				/>
			</div>
			<div>
				<EnlaceMenu
					text="Conóceme"
					href="#conoceme"
				/>
			</div>
			<div>
				<EnlaceMenu
					text="Herramientas"
					href="#herramientas"
				/>
			</div>
			<div>
				<EnlaceMenu
					text="Portafolio"
					href="#portafolio"
				/>
			</div>
			<div>
				<EnlaceMenu
					text="Contactame"
					href="#contactame"
				/>
			</div>
		</Nav>
	);
};

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
				<EnlaceMenu text='Inicio' href='init' />
			</div>
			<div>
				<EnlaceMenu text='Conóceme' href='' />
			</div>
			<div>
				<EnlaceMenu text='Herramientas' href='' />
			</div>
			<div>
				<EnlaceMenu text='Portafolio' href='' />
			</div>
			<div>
				<EnlaceMenu text='Contactame' href='' />
			</div>
		</Nav>
	);
};

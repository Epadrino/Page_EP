import React from 'react';
import { Burger } from './Burger';

import { Nav } from './navbarStyled';

export const Navbar = () => {
	return (
		<Nav>
			<div className='logo'>
				<h1>
					<b>EP</b>ortafolio
				</h1>
			</div>
			<Burger />
		</Nav>
	);
};

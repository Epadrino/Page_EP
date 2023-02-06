import { useState } from 'react';

export const useNavbar = (State = false) => {
	const [open, setOpen] = useState(State);

	const openNavbar = () => {
		setOpen((prevValue) => !prevValue);
	};

	return {
		open,
		openNavbar,
	};
};

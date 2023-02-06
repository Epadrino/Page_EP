import { UIContext } from '@/context/ui';
import { useNavbar } from '@/hooks/useNavbar';
import { useContext } from 'react';

import styled from 'styled-components';
import { IconMoon } from '../icons/IconMoon';
import { IconSun } from '../icons/IconSun';

export const Toggle = () => {
	const { theme, changeTheme } = useContext(UIContext);

	return (
		<SwitchButtom>
			<SwitchButtonLabel
				onClick={changeTheme}
				open={theme === 'dark'}
				className="switch-button__label"
			>
				<Box open={theme === 'dark'}>
					{theme === 'dark' ? (
						<IconMoon
							width="50%"
							height="50%"
						/>
					) : (
						<IconSun
							width="50%"
							height="50%"
						/>
					)}
				</Box>
			</SwitchButtonLabel>
		</SwitchButtom>
	);
};

const SwitchButtom = styled.div`
	display: flex;
	position: relative;
	z-index: 10;
`;

const Box = styled.div<{ open: boolean }>`
	transition: 1.5s;
	position: fixed;
	position: absolute;
	width: 1.5rem;
	height: 1.5rem;
	transform: translateX(${({ open }) => (open ? '1.25em' : '0em')});
	left: 5px;
	top: ${({ open }) => (open ? '3px' : '4px')};
`;

const SwitchButtonLabel = styled.div<{ open: boolean }>`
	display: inline-block;
	background-color: ${(props) => props.theme.backgrounds.header};
	width: 2.5rem;
	height: 1.5rem;
	border-radius: 3rem;
	position: relative;
	transition: 1s;
	box-shadow: inset 0px 0px 0px 2px;
	:before {
		content: '';
		transition: 1s;
		transform: translateX(${({ open }) => (open ? '1.25em' : '0em')});
		display: block;
		position: absolute;
		width: 1.5rem;
		height: 1.5rem;
		background-color: ${(props) => props.theme.backgrounds.primary};
		border-radius: 50%;
		box-shadow: inset 0px 0px 0px 2px
			${(props) => props.theme.backgrounds.secondary};
	}
`;

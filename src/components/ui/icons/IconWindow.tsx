import { FC } from 'react';
import styled from 'styled-components';

import { ContainerLogo } from '../../contents/history/historyStyled';

interface Props {
	width: string;
	height: string;
}

const SVG = styled.svg`
	g {
		fill: ${(props) => props.theme.backgrounds.primary};
		transition-duration: 1s;
		${ContainerLogo}:hover & {
			fill: ${(props) => props.theme.backgrounds.secondary};
		}
	}
`;

export const IconWindow: FC<Props> = ({ width, height }) => {
	return (
		<SVG
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="currentColor"
			viewBox="0 0 16 16"
		>
			<g>
				<path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
				<path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z" />
			</g>
		</SVG>
	);
};

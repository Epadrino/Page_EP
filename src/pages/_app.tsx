import type { AppProps } from 'next/app';

import { GlobalStyle } from '@/styles/GlobalStyles.styled';
import { Fonts } from '@/styles/font/Fonts';

import { UIProvider } from '@/context/ui';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<UIProvider>
			<GlobalStyle />
			<Fonts>
				<Component {...pageProps} />
			</Fonts>
		</UIProvider>
	);
}

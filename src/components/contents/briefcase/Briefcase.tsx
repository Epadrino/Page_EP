import Image from 'next/image';
import React from 'react';
import {
	BoxContend,
	BoxLogo,
	Card,
	Container,
	ContainerCard,
	ContainerTitle,
	Logo,
	Title,
} from './briefcaseStyled';

export const Briefcase = () => {
	return (
		<Container>
			<ContainerTitle>
				<Title>Portafolio</Title>
			</ContainerTitle>
			<ContainerCard>
				<Card>
					<BoxLogo>
						<Logo>
							<Image
								src="/images/rodauce.png"
								alt="img"
								fill
								sizes="100vw"
							/>
						</Logo>
					</BoxLogo>
					<BoxContend>
						<h4>Landing Page WordPress</h4>
						<p>
							Pagina creada comercio ubicado en valencia España <br />
							<br />
							ir a:{' '}
							<a
								href="http://rodauce.es/"
								target="_blank"
							>
								Rodauce
							</a>
						</p>
					</BoxContend>
				</Card>
				<Card>
					<BoxLogo>
						<Logo>
							<Image
								src="/images/pokemonApi.png"
								alt="img"
								fill
								sizes="100vw"
							/>
						</Logo>
					</BoxLogo>
					<BoxContend>
						<h4>Probando API Pokemos</h4>
						<p>
							Creacion de una pagina utilizando la PokéAPI con Next.js <br />
							<br />
							ir a:{' '}
							<a
								href="https://pokemon-app-steel-xi.vercel.app/"
								target="_blank"
							>
								Pokemons
							</a>
						</p>
					</BoxContend>
				</Card>
				<Card>
					<BoxLogo>
						<Logo>
							<Image
								src="/images/brosmind.png"
								alt="img"
								fill
								sizes="100vw"
							/>
						</Logo>
					</BoxLogo>
					<BoxContend>
						<h4>Landing Page Next.js</h4>
						<p>
							Pagina hecha para NOJPG para la venta de NFTS <br />
							<br />
							ir a:{' '}
							<a
								href="https://brosmind.notonlyajpg.com/"
								target="_blank"
							>
								Brosmind
							</a>
						</p>
					</BoxContend>
				</Card>
				<Card>
					<BoxLogo>
						<Logo>
							<Image
								src="/images/waleska.png"
								alt="img"
								fill
								sizes="100vw"
							/>
						</Logo>
					</BoxLogo>
					<BoxContend>
						<h4>Landing Page Next.js</h4>
						<p>
							Pagina hecha para NOJPG para la venta de NFTS <br />
							<br />
							ir a:{' '}
							<a
								href="https://waleska.notonlyajpg.com//"
								target="_blank"
							>
								Waleska
							</a>
						</p>
					</BoxContend>
				</Card>
				<Card>
					<BoxLogo>
						<Logo>
							<Image
								src="/images/tony_emotions.png"
								alt="img"
								fill
								sizes="100vw"
							/>
						</Logo>
					</BoxLogo>
					<BoxContend>
						<h4>Landing Page WordPress</h4>
						<p>
							Pagina hecha para Tony Emotions
							<br />
							<br />
							ir a:{' '}
							<a
								href="https://tonyemotions.com/"
								target="_blank"
							>
								Tony Emotion
							</a>
						</p>
					</BoxContend>
				</Card>
			</ContainerCard>
		</Container>
	);
};

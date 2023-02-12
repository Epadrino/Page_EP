interface SeedBriefcase {
	key: number;
	titleDescription: string;
	description: string;
	img: string;
	title: string;
	url: string;
}

interface SeedData {
	projects: SeedBriefcase[];
}

export const BriefcaseData: SeedData = {
	projects: [
		{
			key: 1,
			title: 'Rodauce',
			titleDescription: 'Landing Page WordPress',
			description:
				'Pagina creada para Rodauce comercio de comida ubicado en Valencia España',
			img: '/images/rodauce.png',
			url: 'http://rodauce.es/',
		},
		{
			key: 2,
			title: 'Pokemons',
			titleDescription: 'Probando API Pokemos',
			description: 'Creación de una pagina utilizando la PokéAPI con Next.js',
			img: '/images/pokemonApi.png',
			url: 'https://pokemon-app-steel-xi.vercel.app/',
		},
		{
			key: 3,
			title: 'Brosmind',
			titleDescription: 'Landing Page',
			description: 'Pagina hecha para NOJPG para la venta de NFTS',
			img: '/images/brosmind.png',
			url: 'https://brosmind.notonlyajpg.com/',
		},
		{
			key: 4,
			title: 'Waleska',
			titleDescription: 'Landing Page Next.js',
			description: 'Pagina hecha para NOJPG para la venta de NFTS',
			img: '/images/waleska.png',
			url: 'https://waleska.notonlyajpg.com//',
		},
		{
			key: 5,
			title: 'Tony Emotion',
			titleDescription: 'Landing Page WordPress',
			description: 'Pagina hecha para Tony Emotions',
			img: '/images/tony_emotions.png',
			url: 'https://tonyemotions.com/',
		},
	],
};

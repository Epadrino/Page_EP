const size = {
	mobileXS: '150px',
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	menu: '769px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '1920px',
	desktopL: '2560px',
};

export const device = {
	mobileXS: `(min-width: ${size.mobileXS})`,
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	menu: `(max-width: ${size.menu})`,
	laptop: `(min-width: ${size.laptop})`,
	laptopL: `(min-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktopL})`,
};

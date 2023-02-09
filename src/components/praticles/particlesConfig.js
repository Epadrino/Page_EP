export const particlesConfig = {
	fpsLimit: 60,
	interactivity: {
		events: {
			onClick: {
				enable: true,
				mode: 'push',
			},
			onHover: {
				enable: true,
				mode: 'repulse',
			},
			resize: true,
		},
		modes: {
			push: {
				quantity: 10,
			},
			repulse: {
				distance: 100,
				duration: 0.4,
			},
		},
	},
	particles: {
		color: {
			value: '#000000',
		},
		links: {
			color: '#000000',
			distance: 200,
			enable: true,
			opacity: 0.5,
			width: 1,
		},
		collisions: {
			enable: true,
		},
		move: {
			direction: 'none',
			enable: true,
			outModes: {
				default: 'bounce',
			},
			random: false,
			speed: { min: 1, max: 5 },
			straight: false,
		},
		number: {
			density: {
				enable: true,
				area: 800,
			},
			value: 80,
		},
		opacity: {
			value: 0.5,
		},
		shape: {
			type: 'circle',
		},
		size: {
			value: { min: 1, max: 5 },
		},
	},
	detectRetina: true,
};

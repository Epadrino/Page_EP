import { useCallback, useContext } from 'react';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { UIContext } from '@/context/ui';

export const AnimationParticles = () => {
	const { theme } = useContext(UIContext);

	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	return (
		<>
			{theme === 'light' ? (
				<Particles
					id="tsparticles"
					init={particlesInit}
					options={{
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
								speed: 1,
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
					}}
				/>
			) : (
				<Particles
					id="tsparticles"
					init={particlesInit}
					options={{
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
								value: '#154dd0',
							},
							links: {
								color: '#154dd0',
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
								speed: 1,
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
					}}
				/>
			)}
		</>
	);
};

import linkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import githubSquare from '@fortawesome/fontawesome-free-brands/faGithub'

export const biography = {
	name: 'Mei Chen',
	avatar: '/aboutmepic.jpg',
	contactLinks: [
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/meichen6/',
			icon: linkedin
		},
		{
			name: 'GitHub',
			href: 'https://github.com/meichen',
			icon: githubSquare
		}
	],
	brandStatement: `I am a determined web developer who utilizes innovative ideas and an
	intentional approach to solving problems and building applications
	to help businesses effectively reach their audiences.`
}

export const portfolio = {
	items: [
		{
			name: 'Chinese New Year Trivia',
			description: 'A short trivia game project.',
			image: '/portfolio/chinese-new-year-trivia/cover-image.png',
			url: 'https://meichen.github.io/project-1',
			cta: 'View Demo'
		},
		{
			name: 'Jelly Byte',
			description: 'Music Playlist',
			image: '/portfolio/jelly-byte/cover-image.png',
			url: 'https://jelly-byte.herokuapp.com/',
			cta: 'View Demo'
		},
		{
			name: 'MapMyPain',
			description: 'A short trivia game project.',
			image: '/portfolio/map-my-pain/cover-image.png',
			url: 'http://map-my-pain.surge.sh/',
			cta: 'View Demo'
		}
	]
}

export default {
	biography,
	portfolio
}

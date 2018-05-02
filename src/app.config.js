import linkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import githubSquare from '@fortawesome/fontawesome-free-brands/faGithub'
import envelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

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
		},
		{
			name: 'email',
			href: 'mailto:meichen6@gmail.com',
			icon: envelope
		}
	],
	brandStatement: `I am a determined web developer who aspires to innovate and solve real-world problems through delivering great user experiences and beautiful layouts.`
}

export const portfolio = {
	items: [
		{
			name: 'Chinese New Year Trivia',
			description:
				'Chinese New Year Trivia is a seasonal trivia game. (JavaScript, CSS, HTML)',
			image: '/portfolio/chinese-new-year-trivia/cover-image.png',
			url: 'https://meichen.github.io/project-1',
			cta: 'View Demo'
		},
		{
			name: 'Jelly Byte',
			description:
				'JellyByte is an app that leverages the Spotify Api to compose online playlists that can be shared. (Node.js, Express, Mongoose, HandleBars, CSS, HTML)',
			image: '/portfolio/jelly-byte/cover-image.png',
			url: 'https://jelly-byte.herokuapp.com',
			cta: 'View Demo'
		},
		{
			name: 'MapMyPain',
			description:
				'MapMyPain is an app that assists users in tracking their pain and health. Users can quickly reference their notes when visiting their doctor. (React, Node.js, Express, CSS, HTML)',
			image: '/portfolio/map-my-pain/cover-image.png',
			url: 'https://mapmypain.meichen.me',
			cta: 'View Demo'
		}
	]
}

export default {
	biography,
	portfolio
}

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
	brandStatement: `I am a determined web developer who utilizes innovative ideas and an
	intentional approach to solving problems and building applications
	to help businesses effectively reach their audiences.`
}

export const portfolio = {
	items: [
		{
			name: 'Chinese New Year Trivia',
			description:
				'Chinese New Year Trivia is built using HTML, CSS, and Javascript it is a trivia game that was coded during the time of Chinese New Year to serve as a fun test your knowledge trivia.',
			image: '/portfolio/chinese-new-year-trivia/cover-image.png',
			url: 'https://meichen.github.io/project-1',
			cta: 'View Demo'
		},
		{
			name: 'Jelly Byte',
			description:
				'JellyByte is an app built in Express, Mongoose, and HandleBars. JellyByte is a playlist apps that uses Spotify Api to help built playlist to share with friends.',
			image: '/portfolio/jelly-byte/cover-image.png',
			url: 'https://jelly-byte.herokuapp.com/',
			cta: 'View Demo'
		},
		{
			name: 'MapMyPain',
			description:
				'MapMyPain is an app built is React and Express. MapMyPain helps users document their pain and track their health. Users can have detail record of their medical history so they will never forget at the doctors.',
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

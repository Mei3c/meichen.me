import React from 'react'
import './PortfolioItem.css'

const PortfolioItem = ({ name, description, image, url, cta }) => (
	<article className="PortfolioItem">
		<figure style={{ backgroundImage: `url('${image}')` }} />
		<section>
			<header>
				<h2>{name}</h2>
			</header>
			<summary>{description}</summary>
			<footer>
				<a href={url} target="_blank">
					{cta}
				</a>
			</footer>
		</section>
	</article>
)

export default PortfolioItem

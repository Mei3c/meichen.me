import React from 'react'
import './PortfolioItem.css'

const PortfolioItem = ({ name, description, image, url, cta }) => (
	<article className="PortfolioItem">
		<figure style={{ backgroundImage: `url('${image}')` }} />
		<section>
			<summary>{description}</summary>
			<a href={url} target="_blank">
				{cta}
			</a>
		</section>
	</article>
)

export default PortfolioItem

import React from 'react'

import './BrandStatement.css'

const BrandStatement = ({ name, summary, avatar }) => (
	<section className="BrandStatement">
		<figure style={{ backgroundImage: `url('${avatar}')` }} title={name} />
		<section>
			<h1>{name}</h1>
			<summary>{summary}</summary>
		</section>
	</section>
)

export default BrandStatement

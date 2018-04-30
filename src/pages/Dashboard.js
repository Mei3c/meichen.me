import React, { Component } from 'react'

import './Dashboard.css'
import BrandStatement from '../components/BrandStatement'
import PortfolioItem from '../components/PortfolioItem'

class Dashboard extends Component {
	render() {
		const { config } = this.props
		return (
			<main className="dashboard wrapper">
				<BrandStatement
					name={config.biography.name}
					summary={config.biography.brandStatement}
					avatar={config.biography.avatar}
				/>
				<hr />
				<section>
					{config.portfolio.items.length && (
						<ul>
							{config.portfolio.items.map(item => (
								<li key={item.name}>
									<PortfolioItem {...item} />
								</li>
							))}
						</ul>
					)}
				</section>
			</main>
		)
	}
}

export default Dashboard

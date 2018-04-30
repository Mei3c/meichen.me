import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import './Header.css'

const Header = ({ name, avatar, contactLinks }) => (
	<header className="header">
		<div className="wrapper">
			<div className="site-logo">
				<Link to="/">
					<figure
						style={{ backgroundImage: `url('${avatar}')` }}
						title={name}
					/>
					{name}
				</Link>
			</div>
			<nav className="nav">
				{contactLinks.map(link => (
					<Link to={link.href} target="_blank">
						<FontAwesomeIcon icon={link.icon} />
					</Link>
				))}
			</nav>
		</div>
	</header>
)

export default Header

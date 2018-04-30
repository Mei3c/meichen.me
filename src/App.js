import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import config from './app.config'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'

const App = () => (
	<Fragment>
		<Header
			avatar={config.biography.avatar}
			name={config.biography.name}
			contactLinks={config.biography.contactLinks}
		/>
		<Switch>
			<Route
				exact
				path="/"
				render={routeProps => <Dashboard {...routeProps} config={config} />}
			/>
		</Switch>
	</Fragment>
)

export default App

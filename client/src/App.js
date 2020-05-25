import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
import Register from './component/Register';

import Home from './component/Home';
import Profile from './component/Profile';
import Discover from './component/Discover';
import MusicNews from './component/MusicNews';
import Contact from './component/Contact';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container-fluid mainContainer">
					<Navigation />
					<Switch>
						<div className="appBody">
							<Route exact path="/" component={Register} />
							<Route exact path="/home" component={Home} />
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/discover" component={Discover} />
							<Route exact path="/news" component={MusicNews} />
							<Route exact path="/contact" component={Contact} />
						</div>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

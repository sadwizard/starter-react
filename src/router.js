import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './components/Home.js';
import About from './components/About.js';

const BaseRouter = () => (
	<Router>		
		<div>
			<Route path='/' exact component={Home}/>		
			<Route path='/about' component={About}/>	
		</div>		
	</Router>
);


export default BaseRouter;
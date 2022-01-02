import React, { FC } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';

import AdminPage from './AdminPage';
import Header from './Header';
import ProductsPage from './ProductsPage';
import ProductPage from './ProductPage';
import NotFoundPage from './NotFoundPage';

const Routes: FC = () => {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Redirect exact={true} from="/" to="/products" />
					<Route exact={true} path="/products" component={ProductsPage} />
					<Route path="/products/:id" component={ProductPage} />
					<Route path="/admin" component={AdminPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default Routes;

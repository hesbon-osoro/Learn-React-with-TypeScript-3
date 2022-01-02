import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminPage from './AdminPage';
import Header from './Header';
import ProductsPage from './ProductsPage';

const Routes: FC = () => {
	return (
		<Router>
			<div>
				<Header />
				<Route path="/products" component={ProductsPage} />
				<Route path="/admin" component={AdminPage} />
			</div>
		</Router>
	);
};

export default Routes;

import React, { Component } from 'react';
import { IProduct, products } from './ProductsData';
import { Link } from 'react-router-dom';

interface IState {
	products: IProduct[];
}

class ProductsPage extends Component<{}, IState> {
	public constructor(props: {}) {
		super(props);
		this.state = { products: [] };
	}

	public componentDidMount() {
		this.setState({ products });
	}

	public render() {
		return (
			<div className="page-container">
				<p>
					Welcome to React Shop where you can get all your tools for ReactJS!
				</p>
				<ul className="product-list">
					{this.state.products.map(product => (
						<li key={product.id} className="product-list-item">
							<Link to={`/products/${product.id}`}> {product.name}</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default ProductsPage;

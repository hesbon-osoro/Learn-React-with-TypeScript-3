import React, { Component } from 'react';
import { Prompt, RouteComponentProps } from 'react-router-dom';
import { IProduct } from './ProductsData';
import Product from './Product';
import { connect } from 'react-redux';
import { addToBasket } from './BasketActions';
import { getProduct } from './ProductsActions';
import { IApplicationState } from './Store';

interface IProps extends RouteComponentProps<{ id: string }> {
	addToBasket: typeof addToBasket;
	getProduct: typeof getProduct;
	loading: boolean;
	product?: IProduct;
	added: boolean;
}

class ProductPage extends Component<IProps> {
	public componentDidMount() {
		if (this.props.match.params.id) {
			const id: number = parseInt(this.props.match.params.id, 10);
			this.props.getProduct(id);
		}
	}
	private handleAddClick = () => {
		if (this.props.product) {
			this.props.addToBasket(this.props.product);
		}
	};
	private navAwayMessage = () =>
		'Are you sure you leave without buying this product';

	public render() {
		const product = this.props.product;
		return (
			<div className="page-container">
				<Prompt when={!this.props.added} message={this.navAwayMessage} />
				{product || this.props.loading ? (
					<Product
						loading={this.props.loading}
						product={product}
						inBasket={this.props.added}
						onAddToBasket={this.handleAddClick}
					/>
				) : (
					<p>Product not found</p>
				)}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		addToBasket: (product: IProduct) => dispatch(addToBasket(product)),
		getProduct: (id: number) => dispatch(getProduct(id)),
	};
};
const mapStateToProps = (store: IApplicationState) => {
	return {
		added: store.basket.products.some(p =>
			store.products.currentProduct
				? p.id === store.products.currentProduct.id
				: false
		),
		basketProducts: store.basket.products,
		loading: store.products.productsLoading,
		product: store.products.currentProduct || undefined,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

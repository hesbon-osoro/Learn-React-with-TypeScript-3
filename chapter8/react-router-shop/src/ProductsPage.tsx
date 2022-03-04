import React, { Component } from 'react';
import { IProduct } from './ProductsData';
import { Link, RouteComponentProps } from 'react-router-dom';
import 'url-search-params-polyfill';
import { connect } from 'react-redux';
import { IApplicationState } from './Store';
import { getProducts } from './ProductsActions';

interface IState {
	products: IProduct[];
	search: string;
}
interface IProps extends RouteComponentProps {
	getProducts: typeof getProducts;
	loading: boolean;
	products: IProduct[];
}
class ProductsPage extends Component<IProps> {
	public componentDidMount() {
		this.props.getProducts();
	}
	public render() {
		const searchParams = new URLSearchParams(this.props.location.search);
		const search = searchParams.get('search') || '';
		return (
			<div className="page-container">
				<p>
					Welcome to React Shop where you can get all your tools for ReactJS!
				</p>
			</div>
		);
	}
}
const mapStateToProps = (store: IApplicationState) => ({
	loading: store.products.productsLoading,
	products: store.products.products,
});
const mapDispatchToProps = (dispatch: any) => {
	return { getProducts: () => dispatch(getProducts()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);

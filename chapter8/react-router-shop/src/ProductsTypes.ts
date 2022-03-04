import { IProduct } from './ProductsData';

export enum ProductsActionTypes {
	GETALL = 'PRODUCTS/GETALL',
	LOADING = 'PRODUCTS/LOADING',
}

export interface IProductsGetAllAction {
	type: ProductsActionTypes.GETALL;
	products: IProduct[];
}
export interface IProductsLoadingAction {
	type: ProductsActionTypes.LOADING;
}

export type ProductsActions = IProductsGetAllAction | IProductsLoadingAction;

export interface IProductsState {
	readonly products: IProduct[];
	readonly productsLoading: boolean;
}

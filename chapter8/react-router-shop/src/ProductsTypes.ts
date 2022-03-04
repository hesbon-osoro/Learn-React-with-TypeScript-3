import { IProduct } from './ProductsData';

export enum ProductsActionTypes {
	GETALL = 'PRODUCTS/GETALL',
	GETSINGLE = 'PRODUCTS/GETSINGLE',
	LOADING = 'PRODUCTS/LOADING',
}

export interface IProductsGetAllAction {
	type: ProductsActionTypes.GETALL;
	products: IProduct[];
}
export interface IProductsGetSingleAction {
	type: ProductsActionTypes.GETSINGLE;
	product: IProduct;
}
export interface IProductsLoadingAction {
	type: ProductsActionTypes.LOADING;
}

export type ProductsActions =
	| IProductsGetAllAction
	| IProductsGetSingleAction
	| IProductsLoadingAction;

export interface IProductsState {
	readonly products: IProduct[];
	readonly currentProduct: IProduct | null;
	readonly productsLoading: boolean;
}

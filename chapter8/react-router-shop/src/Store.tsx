import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './ProductsReducers';
import { IProductsState } from './ProductsTypes';

export interface IApplicationState {
	products: IProductsState;
}

const rootReducer = combineReducers<IApplicationState>({
	products: productsReducer,
});

export default function configureStore(): Store<IApplicationState> {
	const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
	return store;
}

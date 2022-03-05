import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './ProductsReducers';
import { IProductsState } from './ProductsTypes';
import { basketReducer } from './BasketReducer';
import { IBasketState } from './BasketTypes';

export interface IApplicationState {
	basket: IBasketState;
	products: IProductsState;
}

const rootReducer = combineReducers<IApplicationState>({
	basket: basketReducer,
	products: productsReducer,
});

export default function configureStore(): Store<IApplicationState> {
	const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
	return store;
}

import { combineReducers } from 'redux';
import products, { getProduct } from './products';
import cart, { getAddedIds, getQuantity } from './cart';

export default combineReducers({
	products,
	cart
});

export function getChartProducts(state) {
	return getAddedIds(state.cart).map(id=>({
		...getProduct(state.products, id),
		quantity: getQuantity(state.cart, id)
	}));
}

export function getTotal(state) {
	getAddedIds(state.cart).reduce((current, nextId) => {
		return current + getProduct(state.products, nextId).price * getQuantity(state.cart, nextId);
	}, 0);
}
import { RECEIVE_PRODUCTS } from '../constants/ActionTypes';
import shop from '../api/shop';

export function getAllProducts() {
	return dispatch => {
		shop.getProducts(products => {
			console.log('products', products);
			dispatch({
				type: RECEIVE_PRODUCTS,
				products
			})
		});
	}
}
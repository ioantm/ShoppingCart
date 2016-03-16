import { RECEIVE_PRODUCTS, ADD_TO_CART, CHECKOUT_REQUEST, CHECKOUT_SUCCESS } from '../constants/ActionTypes';
import shop from '../api/shop';

function reciveProducts(products) {
	return { 
		type: RECEIVE_PRODUCTS,
		products 
	};
}

export function getAllProducts() {
	return dispatch => {
		shop.getProducts(products => {
			dispatch(reciveProducts(products));
		});
	}
}


function addToCartUnsafe(productId) {
	return {
		type: ADD_TO_CART,
		productId
	}
}

export function addToCart(productId) {
	return (dispatch, getState) => {
		if (getState().products.byId[productId].inventory > 0)
		{
			dispatch(addToCartUnsafe(productId));
		}
	}
}

export function checkout(products) {
	return (dispatch, getState) => {
		var cart = getState().cart;

		dispatch({
			type: CHECKOUT_REQUEST
		});

		shop.buyProduct(products, () => {
			dispatch({
				type: CHECKOUT_SUCCESS,
				cart
			})
		})
	}
}
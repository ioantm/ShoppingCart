import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

function product(state, action) {
	switch(action.type) {
		case ADD_TO_CART: 
			return {
				...state,
				inventory: (state.inventory - 1)
			}

		default:
			return state;
	}
}

function byId(state = {}, action) {
	switch (action.type) {
		case RECEIVE_PRODUCTS: {
			return Object.assign({}, state, 
				action.products.reduce((obj, product) => {
					obj[product.id] = product;
					return obj;
				}, {})
			)
		}
		default:
			return Object.assign({}, state, {
				[action.productId]: product(state[action.productId], action) 
			});
	}
	return state;
}

function visibleIds(state = [], action) {
	switch (action.type)
	{
		case RECEIVE_PRODUCTS:
			return action.products.map(product=>product.id);
		default:
			return state;
	}
}

export default combineReducers({
	byId, 
	visibleIds
});
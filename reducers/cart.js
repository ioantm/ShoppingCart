import { ADD_TO_CART, CHECKOUT_SUCCESS, CHECKOUT_FAILURE } from '../constants/ActionTypes';

const initialState = {
	addedIds: [],
	quantityById: {}
}

function addedIds(state = initialState.addedIds, action) {
	switch(action.type) {
		case ADD_TO_CART:
			if (state.indexOf(action.productId) === -1) {
				return [
					...state,
					action.productId
				]
			}
		default:
			return state;
	}
}

function quantityById(state = initialState.quantityById, action) {
	switch(action.type) {
		case ADD_TO_CART:
			const { productId } = action;
			return {
				...state,
				[productId]: (state[productId] || 0) + 1 
			}
		default:
			return state;
	}
}



export default function(state = initialState, action) {
	switch(action.type) {
		case CHECKOUT_SUCCESS: 
			return initialState;
		case CHECKOUT_FAILURE: 
			return action.cart;
		default:
			return {
				addedIds: addedIds(state.addedIds, action),
				quantityById: quantityById(state.quantityById, action)
			}
	}
}

export function getAddedIds(state) {
	return state.addedIds;
}

export function getQuantity(state, id) {
	return state.quantityById[id];
}
import { combineReducers } from 'redux';
import products from './products';

function cart(state = {}, action) {
	return state;
}

export default combineReducers({
	products,
	cart
});
import { ADD_TO_CART } from '../../constants/ActionTypes';
import cart from '../../reducers/cart';
import expect from 'expect';

describe('reducers', () => {
	describe('cart', () => {
		const initalState = {
			addedIds: [],
			quantityById: {}
		}; 

		it('shuld provide inital state', () => {
			expect(cart(undefined, {})).toEqual(initalState);
		});

		it('should handle ADD_TO_CART action', () => {
			expect(cart(initalState, {
				type: ADD_TO_CART,
				productId: 1
			})).toEqual({
				addedIds: [1],
				quantityById: { 1: 1 }
			});
		})
	})
})
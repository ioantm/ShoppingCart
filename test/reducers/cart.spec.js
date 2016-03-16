import { ADD_TO_CART, CHECKOUT_REQUEST, CHECKOUT_FAILURE } from '../../constants/ActionTypes';
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

		it('should handle CHECKOUT_REQUEST action', () => {
			expect(cart({}, { type: CHECKOUT_REQUEST })).toEqual(initalState);
		})

		it('should handler CHECKOUT_FAILURE actin', () => {
			expect(cart({}, { 
				type: CHECKOUT_FAILURE,
				cart: 'cart state' })).toEqual('cart state');
		})

		it('should handle ADD_TO_CART action', () => {
			expect(cart(initalState, {
				type: ADD_TO_CART,
				productId: 1
			})).toEqual({
				addedIds: [1],
				quantityById: { 1: 1 }
			});
		})

		describe('when product is already in chart', () => {
			const state = {
				addedIds: [1, 2],
				quantityById: {
					1: 1,
					2: 1
				}
			};

			it('should handle ADD_TO_CART action', () => {
				expect(cart(state, {
					type: ADD_TO_CART,
					productId: 2
				})).toEqual({
					addedIds: [1, 2],
					quantityById: {
						1: 1,
						2: 2
					}
				})
			})
		})
	})
})
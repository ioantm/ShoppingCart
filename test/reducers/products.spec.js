import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../../constants/ActionTypes';
import products from '../../reducers/products';
import expect from 'expect';

describe('reducers', () => {
	describe('products', () => {
		it('should handle RECEIVE_PRODUCTS action', () => {
			const action = {
				type: RECEIVE_PRODUCTS,
				products: [
				{
					id: 1,
					title: 'Product 1'
				},
				{
					id: 2,
					title: 'Product 2'
				}]
			};

			expect(products({}, action)).toEqual({
				'byId':{
					1: {
						id: 1,
						title: 'Product 1'
					},
					2: {
						id: 2,
						title: 'Product 2'
					}
				},
				visibleIds: [1, 2]
			});
		})

		it('should handle ADD_TO_CART action', () => {
			const state = {
				byId: {
					1: {
						id: 1,
						title: 'Product 1',
						inventory: 1
					}
				}
			};

			const action = {
				type: ADD_TO_CART,
				productId: 1
			};

			expect(products(state, action)).toEqual({
				byId: {
					1: {
						id: 1,
						title: 'Product 1',
						inventory: 0
					}
				},
				visibleIds: []
			});
		})
	})
})
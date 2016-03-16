import React, { PropTypes } from 'react';
import Product from './Product';

const ProductItem = ({ product, onAddToCartClicked }) => {
	return (
		<div>
			<Product 
				title={product.title} 
				price={product.price}/>
			<button
				onClick={onAddToCartClicked}
				disabled={product.inventory > 0 ? '' : 'disabled'}>
					{product.inventory > 0 ? 'Add to cart': 'Sold out'}
			</button>
		</div>
	)
}

ProductItem.propTypes = {
	product: PropTypes.shape({
		price: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		inventory: PropTypes.number.isRequired
	}),

	onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem;
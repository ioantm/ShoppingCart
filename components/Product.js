import React, { PropTypes } from 'react';

const Product = ({ title, price }) => {
	return (
		<div>
			{title} - {price}
		</div>
	)
}

Product.propTypes = {
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}

export default Product;
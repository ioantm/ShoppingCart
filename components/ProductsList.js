import React, { PropTypes } from 'react';

const ProductsList = ({ title, children }) => {
	return (
		<div>
			<h3>{title}</h3>
			{children}
		</div>
	)
}

ProductsList.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string.isRequired
};

export default ProductsList;
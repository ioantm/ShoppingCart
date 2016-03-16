import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getChartProducts, getTotal } from '../reducers';
import { checkout } from '../actions';

const CartContainer = ({ products, checkout}) => {
	return (
		<div>fasdf</div>
	)
};

CartContainer.propTypes = {
	products: PropTypes.shape({
		title: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		quantity: PropTypes.number.isRequired
	}).isRequired,
	checkout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		products: getChartProducts(state),
		total: getTotal(state)
	}
}

export default connect(
	mapStateToProps,
	{ checkout }
)(CartContainer);
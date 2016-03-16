import React, { Component, PropTypes } from 'react';
import ProductsList from '../components/ProductsList';
import { addToCart } from '../actions';
import { connect } from 'react-redux';
import { getVisibleProducts } from '../reducers/products';
import ProductItem from '../components/ProductItem';

class ProductsContainer extends Component {
	render() {
		const { products, addToCart } = this.props;
		
		return (
			<ProductsList title="Products">
				{
					products.map(product=>{
						return (
							<ProductItem 
								key={product.id} 
								product={product} 
								onAddToCartClicked={()=>addToCart(product.id)}/>
						)
					})
				}
			</ProductsList>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		products: getVisibleProducts(state.products)
	}
}

export default connect(
	mapStateToProps,
	{ addToCart }
)(ProductsContainer);
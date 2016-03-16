import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { getAllProducts } from './actions';
import ProductsContainer from './containers/ProductsContainer';
import { Provider } from 'react-redux';
import App from './components/App';

const middleware = [logger(), thunk];
const store = createStore(
	reducer,
	applyMiddleware(...middleware)
);

console.log(process.env.NODE_ENV );
store.dispatch(getAllProducts());

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)
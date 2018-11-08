import axios from 'axios';
import { createAction } from 'redux-actions';
import { getCartProducts } from 'selectors';


const getCartProducts = () => (dispatch, getState) => getCartProducts(getState);

fetchProducts.toString = fetchProductsAsync.toString;

export default fetchProducts;

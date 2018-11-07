import { createSelector } from 'reselect';

const getProducts = createSelector(state => state.get('products'), products => products);

export default getProducts;

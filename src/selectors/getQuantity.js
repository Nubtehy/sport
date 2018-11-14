import { createSelector } from 'reselect';

const getQuantity = createSelector(state => state.get('quantity'), quantity => quantity);

export default getQuantity;

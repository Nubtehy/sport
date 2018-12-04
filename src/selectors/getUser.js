import { createSelector } from 'reselect';

const getUser = createSelector(state => state.get('form'), form => form);

export default getUser;




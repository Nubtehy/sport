import { createSelector } from 'reselect';

const getUser = createSelector(state => state.get('user'), user => user);

export default getUser;

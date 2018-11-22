import { Map, fromJS } from 'immutable';
import getUser from './getUser';

describe('Giveng getCartProducts selector', () => {
  const currentStoreState = fromJS({
    user: { name: '', address: '' },
  });
  describe('when the getUserInfo selector is called', () => {
    let result;

    beforeEach(() => {
      result = getUser(currentStoreState);
    });
    describe('and the cart products in the store', () => {
      it('should return userinfo from the store', () => {
        expect(result).toEqual(Map({ name: '', address: '' }));
      });
    });
  });
});

import { Map, fromJS } from 'immutable';
import getUserInfo from './getUserInfo';

describe('Giveng getCartProducts selector', () => {
  const currentStoreState = fromJS({
    userInfo: { userId: '111111111' },
  });
  describe('when the getUserInfo selector is called', () => {
    let result;

    beforeEach(() => {
      result = getUserInfo(currentStoreState);
    });
    describe('and the cart products in the store', () => {
      it('should return userinfo from the store', () => {
        expect(result).toEqual(Map({ userId: '111111111' }));
      });
    });
  });
});

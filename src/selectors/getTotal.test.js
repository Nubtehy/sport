import { Map, fromJS, List } from 'immutable';
import getTotal from './getTotal';

describe('Giveng getCartProducts selector', () => {
  const currentStoreState = fromJS({
    products: [{ id: 1, name: '111', price: 2 }, { id: 2, name: '222', price: 20 }, { id: 3, name: '222', price: 40 }],
    cart: [1, 2],
    quantity: { 1: 2, 2: 3 },
  });
  describe('when the getTotal selector is called', () => {
    let result;

    beforeEach(() => {
      result = getTotal(currentStoreState);
    });


    describe('and the is cart products in the store', () => {
      it('should return total price of products from the store', () => {
        expect(result).toBe(64);
      });
    });
  });
});

import { Map, fromJS, List } from 'immutable';
import getCartProducts from './getCartProducts';

describe('Giveng getCartProducts selector', () => {
  const currentStoreState = fromJS({
    products: [{ id: 1, name: '111', price: 2 }, { id: 2, name: '222', price: 20 }, { id: 3, name: '222', price: 40 }],
    cart: [1, 2],
  });
  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getCartProducts(currentStoreState);
    });


    describe('and the is cart products in the store', () => {
      it('should return all products from the store', () => {
        expect(result).toEqual(List([Map({ id: 1, name: '111', price: 2 }), Map({ id: 2, name: '222', price: 20 })]));
      });
    });
  });
});

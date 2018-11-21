import { Map, fromJS, List } from 'immutable';
import getProducts from './getProducts';

describe('Given getProducts selector', () => {
  const currentStoreState = fromJS({
    products: [{ id: 1, name: 'product 1', price: 2 }, { id: 2, name: 'product 2', price: 33 }],
  });
  describe('when the selector is called', () => {
    let result;
    beforeEach(() => {
      result = getProducts(currentStoreState);
    });
    describe('and products are in the store', () => {
      it('should return all products from the store', () => {
        expect(result).toEqual(List([Map({ id: 1, name: 'product 1', price: 2 }), Map({ id: 2, name: 'product 2', price: 33 })]));
      });
    });
  });
});

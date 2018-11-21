import { Map, fromJS } from 'immutable';
import getQuantity from './getQuantity';


describe('Given getQuantity selector', () => {
  const currentStoreState = fromJS({
    quantity: { 1: 2, 2: 3 },
  });

  describe('when the selector is called', () => {
    let result;
    beforeEach(() => {
      result = getQuantity(currentStoreState);
    });
    describe('and quantity is in store', () => {
      it('should return quantity of products from the store', () => {
        expect(result).toEqual(Map({ 1: 2, 2: 3 }));
      });
    });
  });
});

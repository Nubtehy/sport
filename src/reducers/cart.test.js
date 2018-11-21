import Immutable, { List } from 'immutable';
import cart, { initialCartState } from './cart';

describe('Given the filter reducer', () => {
  describe('and the reducer is called', () => {
    const testAction = {
      type: '',
      payload: {},
    };

    let newState;

    beforeEach(() => {
      newState = cart(initialCartState, testAction);
    });

    describe('and the ADD_TO_CART action is dispatched', () => {
      beforeAll(() => {
        testAction.type = 'ADD_TO_CART';
        testAction.payload = { id: 1 };
      });
      it('should return a new state with the provided cart', () => {
        expect(newState).toEqual(initialCartState.push(1));
      });
    });

    describe('and the ADD_TO_CART payload is added to the provided cart', () => {
      beforeEach(() => {
        newState = cart(initialCartState, testAction);
      });
      beforeAll(() => {
        testAction.type = 'ADD_TO_CART';
        testAction.payload = { id: 1 };
      });
      
      it('should return a state without duplicate item', () => {
        expect(newState).toEqual(newState);
      });
    });


    describe('and the action dispatched is unknown', () => {
      beforeAll(() => {
        testAction.type = 'UNKNOWN_ACTION';
        testAction.payload = '111';
      });

      it('should return the current state', () => {
        expect(newState).toBe(initialCartState);
      });
    });
  });
});

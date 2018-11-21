import Immutable, { Map, fromJS } from 'immutable';
import user, { initialUserState } from './user';

describe('Given the filter reducer', () => {
  describe('and the reducer is called', () => {
    const testAction = {
      type: '',
      payload: { name: '', address: '' },
    };

    let newState;

    beforeEach(() => {
      newState = user(initialUserState, testAction);
    });

    describe('and the ADD_USER action is dispatched', () => {
      beforeAll(() => {
        testAction.type = 'ADD_USER';
        testAction.payload.name = 'Marselus';
        testAction.payload.address = 'home 1';
      });
      console.log(testAction);
      it('should return a new state with the provided cart', () => {
        expect(newState).toEqual(Map({ name: 'Marselus', address: 'home 1' }));
      });
    });

    describe('and the action dispatched is unknown', () => {
      beforeAll(() => {
        testAction.type = 'UNKNOWN_ACTION';
        testAction.payload.name = 'Marselus';
        testAction.address = 'home 1';
      });

      it('should return the current state', () => {
        expect(newState).toBe(initialUserState);
      });
    });
  });
});

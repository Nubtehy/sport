import userInfo, { initialUserInfoState } from './userInfo';

describe('Given the userInfo reducer', () => {
  describe('and the reducer is called', () => {
    const testAction = {
      type: '',
      payload: undefined,
    };

    let newState;

    beforeEach(() => {
      newState = userInfo(initialUserInfoState, testAction);
    });

    describe('and some action is dispatched', () => {
      beforeAll(() => {
        testAction.type = 'SOME_ACTION';
      });

      it('should return the current state', () => {
        expect(newState).toBe(initialUserInfoState);
      });
    });

    describe('and some other action is dispatched', () => {
      beforeAll(() => {
        testAction.type = 'SOME_OTHER_ACTION';
      });

      it('should return the current state', () => {
        expect(newState).toBe(initialUserInfoState);
      });
    });
  });
});

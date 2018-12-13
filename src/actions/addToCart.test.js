import addToCart from './addToCart';

describe('Given the addToCart action', () => {
  let action;

  describe('when the action is called', () => {
    let thunk;

    beforeEach(() => {
      thunk = addToCart(1);
    });

    it('should return a thunk function', () => {
      expect(thunk).toBeInstanceOf(Function);
    });

    describe('and the thunk is called', () => {
      let dispatchMock;

      beforeEach(() => {
        dispatchMock = jest.fn(_ => _);
        action = thunk(dispatchMock);
      });

      it('should dispatch the ADD_TO_CART action', () => {
        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(action).toEqual({
          type: 'ADD_TO_CART',
          payload: {
            id: 1,
          },
        });
      });
    });
  });
});

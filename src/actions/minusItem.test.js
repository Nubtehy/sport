import minusItem from './minusItem';

describe('Given the minusItem action', () => {
  let action;

  describe('when the action is called', () => {
    let id;
    beforeEach(() => {
      action = minusItem(id);
    });

    it('should have the MINUS_ITEM type', () => {
      expect(action.type).toBe('MINUS_ITEM');
    });

    describe('and a name, address of user are provided', () => {
      beforeAll(() => {
        id = '1';
      });

      it('should create a payload equal to the provided value', () => {
        expect(action.payload.id).toBe('1');
      });
    });
  });
});

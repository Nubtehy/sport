import plusItem from './plusItem';

describe('Given the plusItem action', () => {
  let action;

  describe('when the action is called', () => {
    let id;
    beforeEach(() => {
      action = plusItem(id);
    });

    it('should have the PLUS_ITEM type', () => {
      expect(action.type).toBe('PLUS_ITEM');
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

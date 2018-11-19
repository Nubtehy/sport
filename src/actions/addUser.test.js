import addUser from './addUser';

describe('Given the addUser action', () => {
  let action;

  describe('when the action is called', () => {
    let name;
    let address;

    beforeEach(() => {
      action = addUser({ name, address });
    });

    it('should have the ADD_USER type', () => {
      expect(action.type).toBe('ADD_USER');
    });

    describe('and a name, address of user are provided', () => {
      beforeAll(() => {
        name = 'Mike';
        address = 'Paris';
      });

      it('should create a payload equal to the provided value', () => {
        expect(action.payload.name).toBe('Mike');
        expect(action.payload.address).toBe('Paris');
      });
    });
  });
});

import Autito from './autito';

describe('Autito', () => {
    it('debe inicializar un Autito con las propiedades correctas', () => {
      const autito = new Autito(1, 2, 'N');
      const expectedAutito = {
        x: 1,
        y: 2,
        direc: 'N'
      };
      
      expect(autito).toEqual(expectedAutito);
    });
});
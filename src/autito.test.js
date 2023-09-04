import Autito from './autito';

describe('Autito', () => {
  let autito;

  beforeEach(() => {
    autito = new Autito(0, 0, 'N');
  });

  it('debería crear un objeto Autito con las propiedades adecuadas', () => {
    expect(autito.x).toBe(0);
    expect(autito.y).toBe(0);
    expect(autito.direc).toBe('N');
  });
});
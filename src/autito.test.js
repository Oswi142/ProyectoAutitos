import Autito from './autito';

describe('Autito', () => {
  let autito;

  beforeEach(() => {
    autito = new Autito(0,0,'N');
  });

  it('debería crear un objeto Autito con las propiedades adecuadas', () => {
    expect(autito.x).toBe(0);
    expect(autito.y).toBe(0);
    expect(autito.direc).toBe('N');
  });

  it('debería generar una matriz de tamaño correcto al llamar generarTablero', () => {
    autito.generarTablero(5,5);
    expect(autito.filas).toBe(5);
    expect(autito.columnas).toBe(5);
  });

  it('debería asignar valores correctamente al llamar asignarValores', () => {
    autito.asignarValores('3,4,N');
    expect(autito.x).toBe(3);
    expect(autito.y).toBe(4);
    expect(autito.direccion).toBe('N');
  });
});
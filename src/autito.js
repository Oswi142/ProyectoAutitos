class Autito{
    constructor(x, y, direc)
    {
        this.x=x;
        this.y=y;
        this.direc=direc;
    }

    generarTablero(filas,columnas)
    {
        this.filas = filas;
        this.columnas=columnas;
        this.matriz = new Array(filas);
        for (let i = 0; i < filas+1; i++) 
        {
            this.matriz[i] = new Array(columnas);
        }
    }
    
    asignarValores(cadena) 
    {
        try {
          const valores = cadena.split(',');
          this.x = +valores[0];
          this.y = +valores[1];
          this.direccion = valores[2];
        } catch {
          alert("Valores erroneos");
        }
      }

    definirPosIni(comando)
    {
        let cadena = comando.toString().split(',');
        this.asignarValores(cadena);
        return comando;
    }
}

export default Autito;
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
        try
        {
        this.x = +cadena[0];
        this.y = +cadena[1][0];
        this.direccion = cadena[1][1];
        }
        catch
        {
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
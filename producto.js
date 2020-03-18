export default class Producto{

    constructor(nombre,precio,numeroProducto){
        this._nombre = nombre;
        this._precio = precio;
        this._numeroProducto;
    }
    getDescripcion(){
        return (`${this._nombre} ${this._precio.getPrecio()}`);
    }
    getNombre(){
        return this._nombre
    }
    getPrecio(){
        return this._precio.getValor()
    }
    getNumeroProducto(){
        return this._numeroProducto
    }

    _esIgual(producto){
        if(producto.getNumeroProducto() == this._numeroProducto){ return true}
        else {return false}
        }
    
}
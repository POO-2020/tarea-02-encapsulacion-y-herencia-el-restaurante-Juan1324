import Precio from "./precio.js";
export default class ElementoPedido{

    constructor(cantidad, producto){
        this._producto = producto;
        this._cantidad = cantidad;
    }
    
    
    getDescripcion(){
        let cosTotal = (this._cantidad * this._producto.getPrecio())
        cosTotal = new Precio (cosTotal)
        return(`${this._cantidad} X ${this._producto.getNombre()} ${cosTotal.getPrecio()}`)
    }
    getCantidad(){
        return this._cantidad
    }
}
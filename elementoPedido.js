import Producto from "./producto.js"
export default class ElementoPedido{

    constructor(cantidad, producto){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    
    getDescripcion(){
        let cosTotal = (this._cantidad * this._producto.getPrecio())
        cosTotal = new Precio (cosTotal)
        return(`${this._cantidad} X ${this._producto.getNombre()} ${cosTotal.getPrecio()}`)
    }
}
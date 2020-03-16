import Direccion from "./direccion.js"
import Pedido from "./pedido.js"

export default class Restaurante{

    constructor(nombre,telefono,direccion){
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        this._productos = []
        this._pedidos = []
    }
    registrarProducto(producto){  
        this._productos.push(producto);
    }
    registrarPedido(pedido){
        this._pedidos.push(pedido);
    }
    listarProductos(){
        this._productos.forEach(producto =>{
            console.log(producto.getDescripcion());
        })
    }
    listarPedidos(){
        this._pedidos.forEach(pedido =>{
        console.log(`Los pedidos son para el:, ${pedido.getResumen()}`);
        })
    }
}
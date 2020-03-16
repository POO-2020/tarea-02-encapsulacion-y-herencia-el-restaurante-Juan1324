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
       
        let encontrar = this.buscarPedido(pedido)
       
         if(encontrar == null){this._pedidos.push(pedido)
         return true}
         else
         {return false}
 
         
     }
    listarProductos(){
        this._productos.forEach((producto) =>{
            console.log(producto.getDescripcion());
        })
    }
    listarPedidos(){
        this._pedidos.forEach((pedido,x) =>{
            console.log(`(${x+1})${pedido.getResumen()}`)
        })
    }
    
    eliminarPedido(pedido){
        let found =  this.buscarPedido(pedido)
        if(found == null) return false
        else {
        let i = this._pedidos.indexOf(found)
        this._pedidos.splice(i,1)
        return true
        }
    }
    actualizarPedido(pedido, nuevoPedido){
        let encontrar =  this.buscarPedido(pedido)
        if(encontrar == null) return false
        else {
        let x = this._pedidos.indexOf(encontrar)
        this._pedidos[x] = nuevoPedido
        return true
        }
    }
    buscarPedido(pedido){
        let buscar = this._pedidos.find(ped => ped._esIgual(pedido))
        if(buscar == undefined){return null}
        else {return buscar}
    }
    getPerfil(){
        console.log(`
        ${this._nobre}
        ${this._telefono}
        ${this._direccion}
        `)
    }
}
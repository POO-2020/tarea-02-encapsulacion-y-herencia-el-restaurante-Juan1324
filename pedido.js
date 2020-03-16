import Precio from "./precio.js";

export default class Pedido{
    constructor({fecha,hora,cliente,numeroPedido}){
        this._fecha = fecha;
        this._hora = hora;
        this._cliente = cliente;
        this._numeroPedido= numeroPedido;
        this._NoelmentosPedidos = []

    }
    getNumeroElementos(){
        return (`${this._NoelmentosPedidos.length}`);
    }   

    getNumeroProductos(){
        var productoNum = 0;
        this._NoelmentosPedidos.forEach((elemento) =>{
        productoNum = productoNum +elemento.getCantidad()
         })
        return (productoNum);
        }

    getCostoTotal(){
        var costo = 0;
        this._NoelmentosPedidos.forEach((elemento)=> {
        costo =(costo+ (elemento.getPrecio() * elemento.getCantidad()))
        });
         costo=new Precio(costo)
         return costo.getPrecio()

        }
        
    agregarElemento(elemento){
       return this._NoelmentosPedidos.push(elemento)
    }

    listarElementos(){
        console.log("Listado de los Platillos")
        this._NoelmentosPedidos.forEach((elemento,x) =>{
            console.log(`(${x + 1}) ${elemento.getDescripcion()}`);
        });}    
    
    getResumen(){
        return (`${this._fecha.getFecha()} ${this._hora.getFormato12()} \n- ${this.getNumeroElementos()} Elementos con ${this.getNumeroProductos()} Productos- Costo total ${this.getCostoTotal()}`);
        }
    getNumeroPedido(){
        return this._numeroPedido
        }
       _esIgual(pedido){
        if(pedido.getNumeroPedido() == this._numeroPedido){ return true}
        else {return false}
        }
     }
    


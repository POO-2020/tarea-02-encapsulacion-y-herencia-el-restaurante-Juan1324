import Precio from "./precio.js";

export default class Pedido{
    constructor({fecha,hora,cliente,numeroPedido}){
        this._fecha = fecha;
        this._hora = hora;
        this._cliente = cliente;
        this._numeroPedido= numeroPedido;
        this._NuelementosPedidos = []

    }
    getNumeroElementos(){
        return (`${this._NuelementosPedidos.length}`);
    }
    getNumeroProductos(){
        var productoNum = 0;
        this._NuelementosPedidos.forEach(elemento =>{
            productoNum += elemento.cantidad 
        })
        return (productoNum);
    }
    getCostoTotal(){
        var costo = 0;
        this._NuelementosPedidos.forEach(elemento1 => {
            costo += elemento1.cantidad * elemento1.producto.precio.valor
        });
        return (`${new Precio(costo).getPrecio()}`);
    }
    agregarElemento(elemento1){
        return (`${this._NuelementosPedidos.push(elemento1)}`);
    }      
    listarElementos(){
        console.log("Listado de los Platillos")
        this._NuelementosPedidos.forEach(elemento =>{
            console.log(elemento.getDescripcion());       
        })}
        getResumen(){
            return (`${this._fecha.getFecha()} ${this._hora.getFormato12()} \n- ${this.getNumeroElementos()} Elementos con ${this.getNumeroProductos()} Productos.`);
        }
    
    }

import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js";
import Fecha from "./fecha.js"
import Pedido from "./pedido.js";
import Tiempo from "./tiempo.js"
import Cliente from "./cliente.js";
import ClienteFrecuente from "./clienteFrecuente.js";



class Main{
    constructor(){
        
        this.direccionRest= new Direccion("Bahía de Manzanillo",345,"345-B","Almendros",28979,"Vila de Álvarez","Villa de Álvarez")

        this.direccion= new Direccion("Bahía de Caracoles",333,"333-A","Almendros",28979,"Vila de Álvarez","Villa de Álvarez")

        this.precio= new Precio(7.50)
        this.precio2= new Precio(10.50)

        this.producto= new Producto("Tacos de Adobada",this.precio)
        this.producto2= new Producto("Agua de limón", this.precio2)
        
        this.elementoPedido= new ElementoPedido(this.producto,1)

        this.elementoPedido2= new ElementoPedido(this.producto2,2)

        this.cliente= new Cliente("Aarón Astilla Gurierrez",this.direccion,3128764320)

        this.fecha= new Fecha(13,5,2018)
        this.tiempo= new Tiempo(2,30,"pm")

        let infPedido ={
            fecha: new Fecha(13,2,2018),
            hora: new Tiempo(11,30,"am"),
            cliente: this.cliente,
            numeroDePedido: 2
        }

        let infClienteFrecuente ={
            nombre:"Gregorio Ramiréz Tano",
            direccion: new Direccion("Sandoval",435, "2-B","Huertas",209389,"Colima","Colima"),
            telefono:3121986473,
            numeroCliente:3556,
            fechaRegistro: new Fecha(10,3,2018)

        }


         this.pedido= new Pedido(infPedido)

         this.clienteFrecuente= new ClienteFrecuente(infClienteFrecuente)
         
         this.pedido.agregarElemento(this.elementoPedido)
         this.pedido.agregarElemento(this.elementoPedido2)
         this.pedido.agregarElemento(this.elementoPedido2)

        }
        probarDireccion(){
            console.log(this.direccion. getFormatoExtendido())
            console.log(this.direccion.getFormatoCorto())
        }
        probarPrecio(){
            console.log(this.precio.getPrecio())
        }
        probarProducto(){
            console.log(this.producto.getDescripcion())
        }
        probarElementoPedido(){
            console.log(this.elementoPedido.getDescripcion())
        }
        probarFecha(){
            console.log(this.fecha.getAños())
            console.log(this.fecha.getMeses())
            console.log(this.fecha.getSemanas())
            console.log(this.fecha.getDias())
            console.log(this.fecha.getFecha())
            console.log(this.fecha.getDiaFecha())
            
        }
        probarCliente(){
            console.log(this.cliente.getPerfil())
        }
        probarPedido(){
            console.log(this.pedido.getResumen())
            console.log(this.pedido.getNumeroElementos())
            console.log(this.pedido.getNumeroProductos())
            console.log(this.pedido.getCostoTotal())
            this.pedido.listarElementos()
        }
        probarTiempo(){
            console.log(this.tiempo.getFormato12())
            console.log(this.tiempo.getFormato24())

        }
        probarCliente(){
            console.log(this.cliente.getPerfil())
        }

        probarClienteFrecuente(){
            console.log(this.clienteFrecuente.getPerfil())
        }


    }

let app=new Main();
//app.probarCliente();
//app.probarDireccion();
//app.probarElementoPedido();
//app.probarPedido();
//app.probarPrecio();
//app.probarFecha();
//app.probarTiempo();
app.probarClienteFrecuente();
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
        
        this.elementoPedido= new ElementoPedido(this.producto,2)

        this.elementoPedido2= new ElementoPedido(this.producto2,3)

        this.cliente= new Cliente("Aarón Astilla Gurierrez",this.direccion,3128764320)

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
            fecha: new Fecha(10,3,2018)
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
        probarElemento(){
            console.log(this.elementoPedido.getDescripcion())
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


    }

let app=new Main();
app.probarPedido();
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js";
import Fecha from "./fecha.js"
import Pedido from "./pedido.js";
import Tiempo from "./tiempo.js"
import Cliente from "./cliente.js";
import Restaurante from "./restaurante.js"




class Main{
    constructor(){
        
        this.direccionRest= new Direccion("Bahía de Manzanillo",345,"345-B","Almendros",28979,"Vila de Álvarez","Villa de Álvarez")

        this.direccion= new Direccion("Bahía de Caracoles",333,"333-A","Almendros",28979,"Vila de Álvarez","Villa de Álvarez")

        this.precio= new Precio(7.50)

        this.producto= new Producto("Tacos de Adobada",this.precio)
        this.producto2= new Producto("Agua de limón", new Precio(10.50))
        
        this.elementoPedido= new ElementoPedido(3,this.producto)

        this.elementoPedido2= new ElementoPedido(3,this.producto2)

        this.cliente= new Cliente("Aarón Astilla Gurierrez","Xollopan",3128764320)

        let infPedido ={
            fecha: new Fecha(new Date(13,2,2018)),
            hora: new Tiempo(11,30,"am"),
            cliente: this.cliente,
            numeroDePedido: 2
        }
        let infoRestaurante={
            nombre: "El trebol",
            telefono: 3121853247,
            dirección: this.direccionRest 
        }
         this.pedido= new Pedido(infPedido)

         this.restaurante = new Restaurante(infoRestaurante)  
         
         this.pedido.agregarElemento(this.elementoPedido)
         this.pedido.agregarElemento(this.elementoPedido1)
         this.pedido.agregarElemento(this.elementoPedido2)
        }
        probarDirección(){
            console.log(this.direccion. getFormatoExtendido())

            console.log(this.direccion.getFormatoCorto())
        }


    }

let app=new Main();
app.pruebaDirección();
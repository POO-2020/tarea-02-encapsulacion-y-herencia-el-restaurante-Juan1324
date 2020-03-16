import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js";
import Fecha from "./fecha.js"
import Pedido from "./pedido.js";
import Tiempo from "./tiempo.js"



class Main{
    constructor(){
        
        this.direccion= new Direccion("Bahía de Manzanillo",345,"345-B","Almendros",28979,"Vila de Álvarez","Villa de Álvarez")

        this.precio= new Precio(7.50)

        this.producto= new Producto("Tacos de Adobada",this.precio)
        
        this.elementoPedido= new ElementoPedido(3,this.producto)


        let infPedido ={
            fecha: new Fecha(new Date(13,2,2018)),
            hora: new Tiempo(11,30,"am")
            
            
        }


    }

    
}
let app=new Main();
app.probarFecha();
import express, {Application} from 'express'
import productosRoutes from '../routes/productos'
import carritoRoutes from '../routes/carrito'



class Server {
   private app:Application;
   private port: string 
   private apiPaths = {
       productos:'/productos',
       carrito:'/carrito' 
   }

    constructor(){
       this.app  = express()
       this.port = process.env.PORT || '8000'
       
       
       this.middlewares()

       this.routes()
    }

   

    middlewares(){

        

        //lectura del body
        this.app.use( express.json())

        //Carpeta publica
        this.app.use(express.static('public'))
 
    }

    routes() {
        this.app.use( this.apiPaths.productos, productosRoutes)
        this.app.use( this.apiPaths.carrito,carritoRoutes)
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' +  this.port)
        })
    }
}

export default Server
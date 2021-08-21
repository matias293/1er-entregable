const fs = require('fs');
const path = require('path');

const pathArchivo = path.resolve(__dirname,'productos.txt');

// id,timestamp,nombre,descripcion,codigo,foto {url} , precio , stock

export default class Producto {

  public productos []
  constructor(){
     this.productos = []      
  }

  eliminarProducto = (id) =>{
    let productoBorrado
    let productos = this.productos
     for (let index = 0; index < productos.length; index++) {
       if (productos[index].id === id ){  
           productoBorrado = productos[index]
           this.productos.splice(index,1)
       }     
     }
     return productoBorrado
   }

  
  actualizarProducto = (nombre,descripcion,codigo,foto,precio,stock,id) => {
        
    let productoActualizado
    
    let productos = this.productos
     for (let index = 0; index < productos.length; index++) {
        if (productos[index].id === id ){
          
            productoActualizado = {nombre,descripcion,codigo,foto,precio,stock,id}
            this.productos.splice(index,1,productoActualizado)
        } 
         
     }
     

    return productoActualizado

}

  guardar = (producto) => {

    this.productos.push(producto)

    const data =  fs.readFileSync(pathArchivo,'utf-8')
    
       
       if(data){
           const mensajes = JSON.parse(data)
           
           this.productos = this.productos.concat(mensajes) 
       }
        
          try {
          
               fs.writeFileSync(pathArchivo,JSON.stringify(this.productos,null,'\t'))
              
            
          }   catch (error) {
              console.log('No se pudo guardar el archivo ', error)
              }
  }

  leer = () =>{
      
          try {
            const data =  fs.readFileSync(pathArchivo,'utf-8')
            if(!data) {
                return []
            }
            if(data){
                return JSON.parse(data)
            }
              
            
          }    catch (error) {
                  console.log('No se pudo leer el archivo ', error)
               }
   
   
  }
 
  
}

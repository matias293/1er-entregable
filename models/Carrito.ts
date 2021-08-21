const fs = require('fs');
const path = require('path');

const pathArchivo = path.resolve(__dirname,'carrito.txt');

export default class Carrito {
  public carrito: string[]
  constructor(){
   this.carrito = []
  }

  guardar = (mensaje) => {
    const data =  fs.readFileSync(pathArchivo,'utf-8')
    
       if (!data){
        this.carrito.push(mensaje)
       }
       if(data){
           const mensajes = JSON.parse(data)
           this.carrito = mensajes
           this.carrito.push(mensaje) 
       }
        
          try {
          
               fs.writeFileSync(pathArchivo,JSON.stringify(this.carrito,null,'\t'))
              
            
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


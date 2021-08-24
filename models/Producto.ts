const fs = require('fs');
const path = require('path');

const pathArchivo = path.resolve(__dirname,'productos.txt');

// id,timestamp,nombre,descripcion,codigo,foto {url} , precio , stock

interface guardar{
  nombre:string,
  descripcion:string,
  codigo:string,
  foto:string,
  precio:number,
  stock:boolean
}

interface product{
  id:number,
  timestamp:number,
  nombre:string,
  descripcion:string,
  codigo:string,
  foto:string,
  precio:number,
  stock:boolean
}

export default class Producto {

    public productos: Array<product>
  constructor(){
       this.productos = []      
       this.actualizado()
      }
  find =() =>{

  }
  actualizado = () => {
    
    const data =  this.readFile()
       if(data){
           const mensajes = JSON.parse(data)
           this.productos = this.productos.concat(mensajes) 
       }
  }

  eliminarProducto = (id:number) =>{
    
     const productos = this.productos

     const productoEliminado =  productos.filter(prod => prod.id !== Number(id))
        this.productos = productoEliminado
     
     this.writeFile()
     return this.productos
    
   }

  
  actualizarProducto = (nombre:string,descripcion:string,codigo:string,foto:string,precio:number,stock:boolean,id:number) => {
        
    let productoActualizado
    
    let productos = this.productos
     for (let index = 0; index < productos.length; index++) {
        if (productos[index].id === id ){
          
            productoActualizado = {nombre,descripcion,codigo,foto,precio,stock,id,timestamp:Date.now()}
            this.productos.splice(index,1,productoActualizado)
        } 
         
     }
     
    this.writeFile()
    return productoActualizado

}

  guardar (producto:guardar) {
    
   const prod = {...producto,id:this.productos.length + 1,timestamp:Date.now()}
    this.productos.push(prod)

    this.writeFile()
  }

  leer = () =>{
      
   const data =  this.readFile()
   
      if(!data) {
        console.log('no exist')
           return []
      }
      if(data){
        let dataParseada = JSON.parse(data)
        // console.log(dataParseada)
         return dataParseada
      }
  }

  writeFile = () => {
    try {
     return fs.writeFileSync(pathArchivo,JSON.stringify(this.productos,null,'\t'))
    } catch (error) {
      console.log('No se pudo escribir el archivo ', error)
    }
  }

  readFile = () =>{
    try {
      return fs.readFileSync(pathArchivo,'utf-8')
    } catch (error) {
      console.log('No se pudo leer el archivo ', error)
    }
  }
 
  
}

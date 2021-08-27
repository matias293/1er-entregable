const fs = require('fs');
const path = require('path');

import { v4 as uuidv4 } from 'uuid';

const pathArchivo = path.resolve(__dirname,'../../data','productos.txt');



interface Guardar{
  nombre:string,
  descripcion:string,
  codigo:string,
  foto:string,
  precio:number,
  stock:boolean
}

export interface Product{
  id:string,
  timestamp:number,
  nombre:string,
  descripcion:string,
  codigo:string,
  foto:string,
  precio:number,
  stock:boolean
}

export default class Producto {

    public productos: Array<Product>
    public id:number

  constructor(){
       this.productos = []
       this.id = 0
       this.actualizado()
      }

  
  actualizado = () => {
    
    const data =  this.readFile()
       if(data){
           const mensajes = JSON.parse(data)
           this.productos = this.productos.concat(mensajes) 
           
       }
  }

  findById =(id:string)   =>{
    const  prod =  this.productos
    const prodById = prod.find(product => product.id === id)
    
    return  prodById
 }
  eliminarProducto = (id:string) =>{
    
     const productos = this.productos

     const productoEliminado =  productos.filter(prod => prod.id !== id)
        this.productos = productoEliminado
        
     
     this.writeFile()
     return this.productos
    
   }

  
  actualizarProducto = (nombre:string,descripcion:string,codigo:string,foto:string,precio:number,stock:boolean,id:string) => {
        
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

  guardar (producto:Guardar) {
  
   const prod = {...producto,id:uuidv4(),timestamp:Date.now()}
    this.productos.push(prod)
    this.writeFile()
  }

  leer = () =>{
      
   const data =  this.readFile()
   
      if(!data) {
        
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

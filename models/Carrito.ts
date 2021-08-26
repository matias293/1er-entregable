const fs = require('fs');
const path = require('path');

const pathArchivo = path.resolve(__dirname,'../../data','carrito.txt');

interface Carro {
  id:number,
  timestamp:number,
  products:Array<Product>
}

interface Product{
  id:number,
  timestamp:number,
  nombre:string,
  descripcion:string,
  codigo:string,
  foto:string,
  precio:number,
  stock:boolean
}

export default class Carrito {

  public carrito:   Array<Carro>
  public carritoOld:   Array<Carro>
  public productos: Array<Product>
 

  constructor(){
   this.carrito = []
   this.carritoOld = []
   this.productos = []
   this.actualizado()
  }

  actualizado = () => {
    const data =  this.readFile()
       if(data){
           const productos = JSON.parse(data)
           this.carritoOld = productos
           this.carrito.push({id:productos.length + 1 ,timestamp:Date.now(),products:this.productos})
           
       }
      else {
      
        this.carrito.push({id:this.carrito.length + 1 ,timestamp:Date.now(),products:this.productos})
         
      }
  }

  guardar = () => {
    if(this.carritoOld.length === 0){
      this.writeFile(this.carrito)
    }
    else{
     const carro = this.carritoOld.concat(this.carrito)
     this.writeFile(carro)
      
    }
  }

  eliminarProducto = (id:number) =>{
    const productos = this.productos
    
    const productosNuevos =  productos.filter(prod => prod.id !== Number(id))
      this.productos = productosNuevos
      this.guardar()
  
  }

  agregarProducto = (product:Array<Product>) => {  
    
    this.productos.push(product)
   
    this.guardar()
  }
  
  leerCarroPorId = (id:number) => {
      const carros : Array<Carro> = this.leer()
      const carrito = carros.find(prod => prod.id === id )
      return carrito
  }
  
  leer = () =>{  
 
   if(this.carritoOld.length === 0){
     return this.carrito
   }
   else {
     
      return this.carritoOld.concat(this.carrito)
   }
  }

  writeFile = (carro:Array<Carro>) => {
    try {
    
      return fs.writeFileSync(pathArchivo,JSON.stringify(carro,null,'\t'))
      
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


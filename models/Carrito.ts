const fs = require('fs');
const path = require('path');

const pathArchivo = path.resolve(__dirname,'carrito.txt');

interface carrito {
  id:number,
  timestamp:number,
  products:product[]
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

export default class Carrito {

  public carrito: Array<carrito>
  public productos:product[]

  constructor(){
   this.carrito = []
   this.productos = [] 
   this.actualizado()
  }

  actualizado = () => {
    const data =  this.readFile()
       if(data){
           const productos = JSON.parse(data)
           this.carrito = this.carrito.concat(productos) 
       }
  }

  eliminarProducto = (id:number) =>{
    const productos = this.productos
    const productosNuevos =  productos.filter(prod => prod.id !== Number(id))
      this.carrito = productosNuevos
    this.writeFile()
    return this.carrito.products
  }

  guardar = (producto:product) => {  
    this.productos.push(producto)
    this.carrito.products = this.productos
    this.writeFile()
  }

  leer = () =>{  
    return this.carrito.products
  }

  writeFile = () => {
    try {
     return fs.writeFileSync(pathArchivo,JSON.stringify(this.carrito,null,'\t'))
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


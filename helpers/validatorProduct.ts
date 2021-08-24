import { Request, Response,NextFunction} from "express";
import Producto from '../models/Producto'

const productos = new Producto()


export const existId = (id:String,req:Request,res:Response,next:NextFunction) => {

  const products = productos.leer()

  const product = products.find((producto:{id:String}) => producto.id === id)
  
  if(!product){
      res.status(404).json({msg:`El id no existe ${ id }`})
  }
  next()
}

export const existProd = (req:Request,res:Response,next:NextFunction) => {
  const products = productos.leer()
  console.log(products,'me ejecuto')

  if(products !== []){

    res.json({msg:`No hay productos disponibles`})
  }
  next()
}
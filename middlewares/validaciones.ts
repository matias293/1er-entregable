import {Request, Response , NextFunction} from 'express';

import Producto from '../models/Producto'
import Carrito from '../models/Carrito';

const productos = new Producto()
const carrito = new Carrito()

const admin = true;

export const checkAdmin = (req: Request, res : Response, next: NextFunction) => {
 
  if(admin)
    next();
  else{
    res.status(401).json({
      msg: "No estas autorizado"
    })
  }
}

export const existId = (req:Request,res:Response,next:NextFunction) => {
   const {id} = req.params
  
  const products = productos.leer()

  const product = products.find((producto:{id:string}) => producto.id === id)
 
  if(!product){
     return res.status(404).json({msg:`El producto con id ${ id } no existe `})
  }
  next()
}

export const existProd = (req:Request,res:Response,next:NextFunction) => {
  const products = productos.leer()
  

  if(products.length === 0){

   return  res.status(404).json({msg:`No hay productos disponibles`})
  }
  next()
}

export const bodyValidator = (req:Request,res:Response,next:NextFunction) => {
  const {nombre,descripcion,codigo,foto,precio,stock} = req.body
  if (!nombre || !descripcion|| !codigo || !foto || !precio || !stock){
    return res.status(404).json({msg:`Campo del body invalido `})
  }
  next()
}

export const existCarrito = (req:Request,res:Response,next:NextFunction) => {
  const {id} = req.params
  
  const carro = carrito.leerCarroPorId(id)

  if(!carro){
    return res.status(404).json({msg:`El carrito con id ${ id } no existe `})
  }
next()
}
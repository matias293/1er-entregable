import {Request, Response , NextFunction} from 'express';

import Producto from '../models/Producto'

const productos = new Producto()

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
   const id = Number(req.params.id)
  const products = productos.leer()

  const product = products.find((producto:{id:number}) => producto.id === id)
 
  if(!product){
     return res.status(404).json({msg:`El id no existe ${ id }`})
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
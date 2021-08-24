import { Request, Response } from "express";

import Producto from '../models/Producto'
import Carrito from '../models/Carrito'

const carrito = new Carrito()
const productos = new Producto()

export const  getLista = (req:Request,res:Response) =>{

      const carro = carrito.leer()
            res.json({
                carro
            })

}


export const getProductFromList  =(req:Request,res:Response) => {
      const id = Number(req.params.id)



      
}

export const postProductoId  =(req:Request,res:Response) => {
  const id = Number(req.params.id)

    const products = productos.leer()
    
    const product = products.find(prod => prod.id === id)

    carrito.guardar(product)

    res.json({
      msg:'Producto Agregado al carrito',
      product
    })
}

export const deleteProductFromList  =(req:Request,res:Response) => {
  const id = Number(req.params.id)

  const carro = carrito.eliminarProducto(id)

  res.json({
    msg:'Producto Eliminado de su carro',
    carro
  })
}
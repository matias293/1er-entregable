import { Request, Response } from "express";
import Carrito from '../models/Carrito'

const carrito = new Carrito()

export const  getLista = (req:Request,res:Response) =>{

      const  carro = carrito.leer() 
      if(carro !== []) res.json({msg:'No hay productos en el carrito'})

          else{
            res.json({
                carro
            })

          }

}


export const getProductFromList  =(req:Request,res:Response) => {
      const {id} = req.params

      
}

export const postProductoId  =(req:Request,res:Response) => {

}

export const deleteProductFromList  =(req:Request,res:Response) => {

}
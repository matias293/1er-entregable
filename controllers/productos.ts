import { Request, Response } from "express";
import { existeProductoPorId } from "../helpers/validator";
import { v4 as uuidv4 } from 'uuid';

import Producto from '../models/Producto'

const product = new Producto()

export const getProducts = (req:Request,res:Response) => {

    const productos =  product.leer()

    if(productos !== []) {
        res.json({
            msg:'No hay productos disponibles'
        })
    }

     res.json({
           productos
     }) 

}

export const getProduct = (req:Request,res:Response) => {

    const {id} = req.params

    const productos =  product.leer()

    if(productos !== []) {
        res.json({
            msg:'No hay productos disponibles'
        })
    }

    else {
       const producto = existeProductoPorId(productos,id)
       if(typeof producto)

    }

}

export const putProduct = (req:Request,res:Response) => {
    const {id} = req.params

    const {nombre,descripcion,codigo,foto,precio,stock} = req.body

    product.actualizarProducto(nombre,descripcion,codigo,foto,precio,stock,id)
    




}

export const postProduct = (req:Request,res:Response) => {
    const producto = req.body

    const prod = {id:uuidv4(),timestamp:Date.now(),...producto}

    product.guardar(prod)

    res.json({
        msg:'Producto agregado exitosamente',
        prod
    })

    



}

export const deleteProductFromList = (req:Request,res:Response) => {
    const {id} = req.params

    const productoEliminado = product.eliminarProducto(id)

    res.json({
        productoEliminado
    })



}
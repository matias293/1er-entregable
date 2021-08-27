import { Request, Response } from "express";


import Producto from '../models/Producto'

const product = new Producto()

export const getProducts = (req:Request,res:Response) => {
    
    const productos =  product.leer()
    
     res.json({
           productos
     }) 

}

export const getProduct = (req:Request,res:Response) => {

    const {id} = req.params

     
    const productoPorId = product.findById(id)
    
    res.json({
        productoPorId
    })

}

export const putProduct = (req:Request,res:Response) => {

    const {id} = req.params

    const {nombre,descripcion,codigo,foto,precio,stock} = req.body

    const productoActualizado = product.actualizarProducto(nombre,descripcion,codigo,foto,precio,stock,id)
    
     res.json({
         msg: 'Producto actualizado existosamente',
         productoActualizado
     })



}

export const postProduct = (req:Request,res:Response) => {
    const producto = req.body


    product.guardar(producto)

    res.json({
        msg:'Producto agregado exitosamente',
        
    })

}

export const deleteProductFromList = (req:Request,res:Response) => {
    const {id} = req.params
    

    const productoEliminado = product.eliminarProducto(id)

    res.json({
        msg:'Producto eliminado exitosamente',
        productoEliminado
    })



}
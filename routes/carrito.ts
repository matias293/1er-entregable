import {Router  } from'express';
import { deleteProductFromList, getLista, getProductFromList, postProductoId } from '../controllers/carrito';

const router = Router();

router.get('/listar',getLista)

router.get('/listar/:id', getProductFromList)

router.post('/agregar/:id_producto', postProductoId )

router.delete('borrar/:id', deleteProductFromList)

export default router
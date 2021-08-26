import {Router  } from'express';
import { deleteProductFromList, getLista, getProductFromList, postProductoId } from '../controllers/carrito';
import { existId } from '../middlewares/validaciones';

const router = Router();

router.get('/listar',getLista)

router.get('/listar/:id', getProductFromList)

router.post('/agregar/:id', existId,postProductoId )

router.delete('/borrar/:id',existId ,deleteProductFromList)

export default router
import {Router  } from'express';
import { deleteProductFromList, getProduct, getProducts, postProduct, putProduct } from '../controllers/productos';

const router = Router();

router.get('/listar',getProducts)

router.get('/listar/:id', getProduct)

router.post('/agregar', postProduct )

router.put('/actualizar/:id', putProduct)

router.delete('borrar/:id', deleteProductFromList)


export default router
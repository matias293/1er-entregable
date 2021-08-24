import {Router  } from'express';
import {check} from 'express-validator'
import { deleteProductFromList, getProduct, getProducts, postProduct, putProduct } from '../controllers/productos';
// import { existId, existProd } from '../helpers/validatorProduct';
import { checkAdmin,existProd, existId} from '../middlewares/validaciones';


const router = Router();

router.get('/listar',existProd,getProducts)

router.get('/listar/:id',[
    checkAdmin,
    existId, 
    existProd
] ,getProduct)

router.post('/agregar', postProduct )

router.put('/actualizar/:id',[
    checkAdmin,
    existProd,
    existId
] , putProduct)

router.delete('/borrar/:id',[
    checkAdmin,
    existProd,
    existId
] , deleteProductFromList)


export default router
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("../controllers/productos");
// import { existId, existProd } from '../helpers/validatorProduct';
const validaciones_1 = require("../middlewares/validaciones");
const router = express_1.Router();
router.get('/listar', validaciones_1.existProd, productos_1.getProducts);
router.get('/listar/:id', [
    validaciones_1.checkAdmin,
    validaciones_1.existId,
    validaciones_1.existProd
], productos_1.getProduct);
router.post('/agregar', validaciones_1.bodyValidator, productos_1.postProduct);
router.put('/actualizar/:id', [
    validaciones_1.checkAdmin,
    validaciones_1.existProd,
    validaciones_1.existId,
    validaciones_1.bodyValidator
], productos_1.putProduct);
router.delete('/borrar/:id', [
    validaciones_1.checkAdmin,
    validaciones_1.existProd,
    validaciones_1.existId
], productos_1.deleteProductFromList);
exports.default = router;
//# sourceMappingURL=productos.js.map
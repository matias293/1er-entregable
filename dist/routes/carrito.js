"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrito_1 = require("../controllers/carrito");
const validaciones_1 = require("../middlewares/validaciones");
const router = express_1.Router();
router.get('/listar', carrito_1.getLista);
router.get('/listar/:id', carrito_1.getProductFromList);
router.post('/agregar/:id', validaciones_1.existId, carrito_1.postProductoId);
router.delete('/borrar/:id', validaciones_1.existId, carrito_1.deleteProductFromList);
exports.default = router;
//# sourceMappingURL=carrito.js.map
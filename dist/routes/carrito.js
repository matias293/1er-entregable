"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var carrito_1 = require("../controllers/carrito");
var router = express_1.Router();
router.get('/listar', carrito_1.getLista);
router.get('/listar/:id', carrito_1.getProductFromList);
router.post('/agregar/:id_producto', carrito_1.postProductoId);
router.delete('borrar/:id', carrito_1.deleteProductFromList);
exports.default = router;
//# sourceMappingURL=carrito.js.map
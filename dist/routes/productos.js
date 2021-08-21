"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productos_1 = require("../controllers/productos");
var router = express_1.Router();
router.get('/listar', productos_1.getProducts);
router.get('/listar/:id', productos_1.getProduct);
router.post('/agregar', productos_1.postProduct);
router.put('/actualizar/:id', productos_1.putProduct);
router.delete('borrar/:id', productos_1.deleteProductFromList);
exports.default = router;
//# sourceMappingURL=productos.js.map
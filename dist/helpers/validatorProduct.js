"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.existProd = exports.existId = void 0;
const Producto_1 = __importDefault(require("../models/Producto"));
const productos = new Producto_1.default();
const existId = (id, req, res, next) => {
    const products = productos.leer();
    const product = products.find((producto) => producto.id === id);
    if (!product) {
        res.status(404).json({ msg: `El id no existe ${id}` });
    }
    next();
};
exports.existId = existId;
const existProd = (req, res, next) => {
    const products = productos.leer();
    console.log(products, 'me ejecuto');
    if (products !== []) {
        res.json({ msg: `No hay productos disponibles` });
    }
    next();
};
exports.existProd = existProd;
//# sourceMappingURL=validatorProduct.js.map
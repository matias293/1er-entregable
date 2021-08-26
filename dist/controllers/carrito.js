"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductFromList = exports.postProductoId = exports.getProductFromList = exports.getLista = void 0;
const Producto_1 = __importDefault(require("../models/Producto"));
const Carrito_1 = __importDefault(require("../models/Carrito"));
const carrito = new Carrito_1.default();
const productos = new Producto_1.default();
const getLista = (req, res) => {
    const carro = carrito.leer();
    res.json({
        carro
    });
};
exports.getLista = getLista;
const getProductFromList = (req, res) => {
    const id = Number(req.params.id);
    const carro = carrito.leerCarroPorId(id);
    res.json({
        carro
    });
};
exports.getProductFromList = getProductFromList;
const postProductoId = (req, res) => {
    const id = Number(req.params.id);
    const product = productos.findById(id);
    carrito.agregarProducto(product);
    res.json({
        msg: 'Producto Agregado al carrito',
        product
    });
};
exports.postProductoId = postProductoId;
const deleteProductFromList = (req, res) => {
    const id = Number(req.params.id);
    carrito.eliminarProducto(id);
    res.json({
        msg: 'Producto Eliminado de su carro',
    });
};
exports.deleteProductFromList = deleteProductFromList;
//# sourceMappingURL=carrito.js.map
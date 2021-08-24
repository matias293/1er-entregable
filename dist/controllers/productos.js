"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductFromList = exports.postProduct = exports.putProduct = exports.getProduct = exports.getProducts = void 0;
const Producto_1 = __importDefault(require("../models/Producto"));
const product = new Producto_1.default();
const getProducts = (req, res) => {
    const productos = product.leer();
    res.json({
        productos
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const id = Number(req.params.id);
    const productos = product.leer();
    const productoPorId = productos.find((producto) => producto.id === id);
    res.json({
        productoPorId
    });
};
exports.getProduct = getProduct;
const putProduct = (req, res) => {
    const id = Number(req.params.id);
    const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
    const productoActualizado = product.actualizarProducto(nombre, descripcion, codigo, foto, precio, stock, id);
    res.json({
        msg: 'Producto actualizado existosamente',
        productoActualizado
    });
};
exports.putProduct = putProduct;
const postProduct = (req, res) => {
    const producto = req.body;
    product.guardar(producto);
    res.json({
        msg: 'Producto agregado exitosamente',
    });
};
exports.postProduct = postProduct;
const deleteProductFromList = (req, res) => {
    const id = Number(req.params.id);
    const productoEliminado = product.eliminarProducto(id);
    res.json({
        msg: 'Producto eliminado exitosamente',
        productoEliminado
    });
};
exports.deleteProductFromList = deleteProductFromList;
//# sourceMappingURL=productos.js.map
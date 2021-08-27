"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.existCarrito = exports.bodyValidator = exports.existProd = exports.existId = exports.checkAdmin = void 0;
const Producto_1 = __importDefault(require("../models/Producto"));
const Carrito_1 = __importDefault(require("../models/Carrito"));
const productos = new Producto_1.default();
const carrito = new Carrito_1.default();
const admin = true;
const checkAdmin = (req, res, next) => {
    if (admin)
        next();
    else {
        res.status(401).json({
            msg: "No estas autorizado"
        });
    }
};
exports.checkAdmin = checkAdmin;
const existId = (req, res, next) => {
    const { id } = req.params;
    const products = productos.leer();
    const product = products.find((producto) => producto.id === id);
    if (!product) {
        return res.status(404).json({ msg: `El producto con id ${id} no existe ` });
    }
    next();
};
exports.existId = existId;
const existProd = (req, res, next) => {
    const products = productos.leer();
    if (products.length === 0) {
        return res.status(404).json({ msg: `No hay productos disponibles` });
    }
    next();
};
exports.existProd = existProd;
const bodyValidator = (req, res, next) => {
    const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
    if (!nombre || !descripcion || !codigo || !foto || !precio || !stock) {
        return res.status(404).json({ msg: `Campo del body invalido ` });
    }
    next();
};
exports.bodyValidator = bodyValidator;
const existCarrito = (req, res, next) => {
    const { id } = req.params;
    const carro = carrito.leerCarroPorId(id);
    if (!carro) {
        return res.status(404).json({ msg: `El carrito con id ${id} no existe ` });
    }
    next();
};
exports.existCarrito = existCarrito;
//# sourceMappingURL=validaciones.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.existProd = exports.existId = exports.checkAdmin = void 0;
const Producto_1 = __importDefault(require("../models/Producto"));
const productos = new Producto_1.default();
const admin = true;
const checkAdmin = (req, res, next) => {
    console.log("EJECUTANDO MIDDLEWARE");
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
    const id = Number(req.params.id);
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
    if (products !== []) {
        return res.status(400).json({ msg: `No hay productos disponibles` });
    }
    next();
};
exports.existProd = existProd;
//# sourceMappingURL=admin.js.map
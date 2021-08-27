"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const uuid_1 = require("uuid");
const pathArchivo = path.resolve(__dirname, '../../data', 'carrito.txt');
class Carrito {
    constructor() {
        this.actualizado = () => {
            const data = this.readFile();
            if (data) {
                const productos = JSON.parse(data);
                this.carritoOld = productos;
                this.carrito.push({ id: uuid_1.v4(), timestamp: Date.now(), products: this.productos });
            }
            else {
                this.carrito.push({ id: uuid_1.v4(), timestamp: Date.now(), products: this.productos });
            }
        };
        this.guardar = () => {
            if (this.carritoOld.length === 0) {
                this.writeFile(this.carrito);
            }
            else {
                const carro = this.carritoOld.concat(this.carrito);
                this.writeFile(carro);
            }
        };
        this.eliminarProducto = (id) => {
            const productos = this.productos;
            const productosNuevos = productos.filter(prod => prod.id !== id);
            this.productos = productosNuevos;
            this.carrito[0].products = this.productos;
            this.guardar();
        };
        this.agregarProducto = (product) => {
            this.productos.push(product);
            this.guardar();
        };
        this.leerCarroPorId = (id) => {
            const carros = this.leer();
            const carrito = carros.find(prod => prod.id === id);
            return carrito;
        };
        this.leer = () => {
            if (this.carritoOld.length === 0) {
                return this.carrito;
            }
            else {
                return this.carritoOld.concat(this.carrito);
            }
        };
        this.writeFile = (carro) => {
            try {
                return fs.writeFileSync(pathArchivo, JSON.stringify(carro, null, '\t'));
            }
            catch (error) {
                console.log('No se pudo escribir el archivo ', error);
            }
        };
        this.readFile = () => {
            try {
                return fs.readFileSync(pathArchivo, 'utf-8');
            }
            catch (error) {
                console.log('No se pudo leer el archivo ', error);
            }
        };
        this.carrito = [];
        this.carritoOld = [];
        this.productos = [];
        this.actualizado();
    }
}
exports.default = Carrito;
//# sourceMappingURL=Carrito.js.map
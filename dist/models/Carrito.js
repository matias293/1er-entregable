"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const pathArchivo = path.resolve(__dirname, 'carrito.txt');
class Carrito {
    constructor() {
        this.actualizado = () => {
            const data = this.readFile();
            if (data) {
                const productos = JSON.parse(data);
                this.carrito = this.carrito.concat(productos);
            }
        };
        this.eliminarProducto = (id) => {
            const productos = this.productos;
            const productosNuevos = productos.filter(prod => prod.id !== Number(id));
            this.carrito = productosNuevos;
            this.writeFile();
            return this.carrito.products;
        };
        this.guardar = (producto) => {
            this.productos.push(producto);
            this.carrito.products = this.productos;
            this.writeFile();
        };
        this.leer = () => {
            return this.carrito.products;
        };
        this.writeFile = () => {
            try {
                return fs.writeFileSync(pathArchivo, JSON.stringify(this.carrito, null, '\t'));
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
        this.productos = [];
        this.actualizado();
    }
}
exports.default = Carrito;
//# sourceMappingURL=Carrito.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const pathArchivo = path.resolve(__dirname, '../../data', 'productos.txt');
class Producto {
    constructor() {
        this.findById = (id) => {
            const prod = this.productos;
            const prodById = prod.find(product => product.id === id);
            return prodById;
        };
        this.actualizado = () => {
            const data = this.readFile();
            if (data) {
                const mensajes = JSON.parse(data);
                this.productos = this.productos.concat(mensajes);
            }
        };
        this.eliminarProducto = (id) => {
            const productos = this.productos;
            const productoEliminado = productos.filter(prod => prod.id !== Number(id));
            this.productos = productoEliminado;
            this.writeFile();
            return this.productos;
        };
        this.actualizarProducto = (nombre, descripcion, codigo, foto, precio, stock, id) => {
            let productoActualizado;
            let productos = this.productos;
            for (let index = 0; index < productos.length; index++) {
                if (productos[index].id === id) {
                    productoActualizado = { nombre, descripcion, codigo, foto, precio, stock, id, timestamp: Date.now() };
                    this.productos.splice(index, 1, productoActualizado);
                }
            }
            this.writeFile();
            return productoActualizado;
        };
        this.leer = () => {
            const data = this.readFile();
            if (!data) {
                console.log('no exist');
                return [];
            }
            if (data) {
                let dataParseada = JSON.parse(data);
                // console.log(dataParseada)
                return dataParseada;
            }
        };
        this.writeFile = () => {
            try {
                return fs.writeFileSync(pathArchivo, JSON.stringify(this.productos, null, '\t'));
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
        this.productos = [];
        this.actualizado();
    }
    guardar(producto) {
        const prod = Object.assign(Object.assign({}, producto), { id: this.productos.length + 1, timestamp: Date.now() });
        this.productos.push(prod);
        this.writeFile();
    }
}
exports.default = Producto;
//# sourceMappingURL=Producto.js.map
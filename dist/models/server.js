"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var productos_1 = __importDefault(require("../routes/productos"));
var carrito_1 = __importDefault(require("../routes/carrito"));
var Server = /** @class */ (function () {
    function Server() {
        this.apiPaths = {
            productos: '/productos',
            carrito: '/carrito'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }
    Server.prototype.middlewares = function () {
        //lectura del body
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
    };
    Server.prototype.routes = function () {
        this.app.use(this.apiPaths.productos, productos_1.default);
        this.app.use(this.apiPaths.carrito, carrito_1.default);
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Servidor corriendo en puerto ' + _this.port);
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map
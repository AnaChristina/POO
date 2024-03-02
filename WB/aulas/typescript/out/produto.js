"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto() {
        this.nome = '';
    }
    Produto.prototype.mostrarDetalhe = function () {
        console.log("detalhes do produto: nome ".concat(this.nome, "\uD83D\uDC20\n"));
    };
    return Produto;
}());
exports.default = Produto;

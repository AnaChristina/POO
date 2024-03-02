"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endereco = /** @class */ (function () {
    function Endereco(numero, rua, bairro, cidade) {
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    Endereco.prototype.mostrarEndereco = function () {
        return "Cidade: ".concat(this.cidade, ", bairro: ").concat(this.bairro, ", rua: ").concat(this.rua, ", numero: ").concat(this.numero, "\uD83E\uDEE1\n");
    };
    return Endereco;
}());
exports.default = Endereco;

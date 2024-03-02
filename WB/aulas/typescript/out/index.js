"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = __importDefault(require("./produto"));
var produtinho = new produto_1.default();
produtinho.nome = "Rimel";
produtinho.mostrarDetalhe();
var endereco_1 = __importDefault(require("./endereco"));
var endereco = new endereco_1.default(123, 'Av. Paulista', 'Jardim Paulista', 'Sao Paulo');
var endereco2 = new endereco_1.default(123, 'Av. Andromeda', 'Jardim Satelite', 'Sao Jose dos Campos');
console.log(endereco.mostrarEndereco());
console.log(endereco2.mostrarEndereco());
var empresa_1 = __importDefault(require("./empresa"));
var empresa1 = new empresa_1.default(endereco2, 'Mercado ltdaa', 'Mercadinho', '123456');
var empresa2 = new empresa_1.default(endereco2, 'Disney', 'Mercadinho', '123456');
console.log(empresa1);
console.log(empresa2.endereco.mostrarEndereco());

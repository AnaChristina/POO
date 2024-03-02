import Produto from "./produto";

let produtinho = new Produto()
produtinho.nome="Rimel"
produtinho.mostrarDetalhe()


import Endereco from "./endereco";
let endereco = new Endereco(123, 'Av. Paulista', 'Jardim Paulista', 'Sao Paulo')
let endereco2 = new Endereco(123, 'Av. Andromeda', 'Jardim Satelite', 'Sao Jose dos Campos')

console.log(endereco.mostrarEndereco())
console.log(endereco2.mostrarEndereco())

import Empresa from "./empresa";

let empresa1 = new Empresa(endereco2,'Mercado ltdaa','Mercadinho','123456')
let empresa2 = new Empresa(endereco2,'Disney','Mercadinho','123456')

console.log(empresa1)
console.log(empresa2.endereco.mostrarEndereco())

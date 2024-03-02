/*FUNCOES CONSTRUTORAS*/

// function empresa (nome, razaoSocial){
//     this.nome = nome
//     this.razaoSocial = razaoSocial
// }

// let empresa = new Empresa('mercado Online', 'ABC ltda')

// console.log()

// function empresa (nome, razaoSocial){
//     this.nome = nome
//     this.razaoSocial = razaoSocial, 
//     this.detalhe = function(){
//         return this.nome + '\n' + this.razaoSocial
//     }
// }

// let empresa = new Empresa('mercado Online', 'ABC ltda')

// console.log('Detalhes da empresa:\n'+empresa.detalhe())


function Produto(){
    this.lote = '1234'
}

const produto = new Produto()
const produto2 = new Produto()

console.log('lote do produto: '+produto.lote + '\nLote do produto 2: ' +produto2.lote)
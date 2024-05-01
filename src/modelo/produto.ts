export default class Produto {
    public nome!: string;
    public valor: number;
    public quantidadeConsumida: number;
    constructor(nome: string, valor: number, quantidadeConsumida: number) {
        this.nome = nome
        this.valor = valor
        this.quantidadeConsumida = 0
    }
    public get getNome(): string {
        return this.nome
    }
    public get getValor(): number {
        return this.valor
    }
    public get getQuantidadeConsumida(): number {
        return this.quantidadeConsumida;
    }

    public adicionarConsumo(): void {
        this.quantidadeConsumida++;
    }
}

//em class cadastroProduto já tem um array de produto consumido. Ver se da pra usar aquele modelo que o prof deixou criado
//se nao der, altere e mantenha o codigo aqui do jeito que esta. 
//caso dê pra usar, deixe este codigo como estava antes das alterações. 
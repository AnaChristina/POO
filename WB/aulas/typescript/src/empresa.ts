import Endereco from "./endereco"

export default class Empresa
{
    public razaoSocial: String
    public nomeFantasia: String
    public cnpj: String
    public endereco: Endereco

    constructor(endereco: Endereco, razaoSocial: String, nomeFantasia: String, cnpj:String)
    {
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.cnpj = cnpj
        this.endereco = endereco
    }
}
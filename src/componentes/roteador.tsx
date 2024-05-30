import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProduto";
import CadastroProduto from "./cadastroProduto";
import './styles.css';
import PesquisaCliente from "./pesquisaCliente";
import CadastroServico from "./cadastroServico";
import RegistroConsumo from "./registroConsumo";




type state = {
    tela: string
}



export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
        this.registrarConsumo = this.registrarConsumo.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }
    

    registrarConsumo() {
        this.setState({ tela: 'registroConsumo' });
    }
    

    

    render() { /**aqui eu consigo mudar a cor da navegação. Mas é ruim pq se eu precisar mudr tudo dps, vou ter que mudar 1 de cada vez. Vou fazer variaveis de css. */
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4 fonte" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <div className="">
                        <PesquisaCliente tema="purple lighten-4"/>
                    </div>
                    <p className="titulo2">Lista de Clientes:</p>
                    <p className="margin-left"> Filtar por:
                        <label>
                            <input className="with-gap" name="genero" id="F" type="radio" checked/>
                            <span>Feminino</span>
                        </label>
                        
                        <label>
                            <input className="with-gap" name="genero" id="M" type="radio"/>
                            <span>Masculino</span>
                        </label>
                    </p>
                    <div>
                        <ListaCliente tema="purple lighten-4" registrarConsumo={this.registrarConsumo} />
                    </div>
                    
                </>
            )
        }
        else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <p className="titulo2">Lista de Produtos:</p>
                    <CadastroProduto tema="purple lighten-4"/>
                    {/* { <ListaProduto tema="purple lighten-4" /> /*Lista de Produtos */} 
                </>
            )
        }
        else if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <CadastroServico tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'registroConsumo') {
            return (
                <>
                    {barraNavegacao}
                    <RegistroConsumo tema="purple lighten-4" />
                </>
            )
        }
        else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" registrarConsumo={this.registrarConsumo} />
                </>
            )
        }
    }
}
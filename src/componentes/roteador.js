import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaClientes from "./listaClientes";
import './styles.css'
import PesquisaCliente from "./pesquisaCliente";
import ListaProduto from "./listaProduto";
import CadastroProduto from "./cadastroProduto";
import ListaServico from "./listaServico";
import CadastroServico from "./cadastroServico";
import RegistroConsumo from "./registroConsumo";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }
    const registrarConsumo = () => {
        setTela('registroConsumo');
    };

    const construirView = () => {

        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Cadastros', 'Produto', 'Serviço']} />
                    <PesquisaCliente tema = "purple lighten-4"/>
                    <ListaClientes tema="purple lighten-4" registrarConsumo={registrarConsumo} />
                </>
            )
        } else if(tela === 'Produto'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Cadastros', 'Produto', 'Serviço']} />
                    <CadastroProduto tema="purple lighten-4" /> 
                    <ListaProduto tema="purple lighten-4" />
                </>
            )
        }
        else if(tela === 'Serviço'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Cadastros', 'Produto', 'Serviço']} />
                    <CadastroServico tema="purple lighten-4" />
                    <ListaServico tema="purple lighten-4" />

                </>
            )
        }
        else if(tela === 'Cadastros'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Cadastros', 'Produto', 'Serviço']} />
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        }
        else{
            return (
                <>
                    <RegistroConsumo tema="purple lighten-4" />
                </>
            )

        }
    }

    return (
        construirView()
    )
}
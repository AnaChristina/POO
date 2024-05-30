import { Component } from "react";
import ListaCliente from "./listaCliente";

type props = {
    tema: string
    registrarConsumo: () => void
}


export default class FormularioCadastroCliente extends Component<props> {
    registrarConsumo = () => {
        console.log("Registro de consumo realizado!");
    }
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (

            <div>
                <div className="sombra margin-left campo custom-form-width">
                    <p className="titulo">Cadastrar Cliente</p>
                    <form className="col s12 custom-form-spacing row div">
                        <div className="row">
                            <div className="input-field col s3">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">Nome:</label>
                            </div>
                            <div className="input-field col s3">
                                <input id="last_name" type="text" className="validate" />
                                <label htmlFor="last_name">Nome Social:</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col input-field col s2">
                                    <input id="last_name" type="text" className="validate" />
                                    <label htmlFor="last_name">CPF:</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s2">
                                <input id="telefone" type="text" className="validate" />
                                <label htmlFor="telefone">Telefone</label>
                            </div>
                            <div className="input-field col s3">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                    </form>
                    <div className=""> 
                        <button className="btn waves-effect waves-light btn-limpar" type="submit" name="action">Limpar</button>
                        <button className="btn waves-effect waves-light btn-cadastrar" onClick={this.registrarConsumo} type="submit" name="action">Cadastrar</button>
                    </div>
                </div>
                <div className="listaCliente espaco">
                    {/* remover botoes de registro, usando use state ou algum tipo de if */}
                    <ListaCliente tema="purple lighten-4" registrarConsumo={this.props.registrarConsumo}/>
                </div>
            </div>
        )
    }
}
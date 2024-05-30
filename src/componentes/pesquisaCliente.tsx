/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type Props = {
    tema: string
}

export default class PesquisaCliente extends Component<Props> {
    render() {
        return (
            <div className="row ">
                <p className="titulo">Pesquisar Cliente:</p>
                <div className="col s8 ">
                    <div className="z-depth-3 campo">
                        <form className="custom-form-spacing">
                            <div className="row ">
                                <div className="input-field col s6">
                                    <input placeholder="" id="first_name" type="text" className="validate" />
                                    <label htmlFor="first_name">NOME DO CLIENTE:</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="cpf" type="text" className="validate"/>
                                    <label htmlFor="cpf">CPF:</label>
                                </div>
                            </div>
                        </form>
                        <div className="mr"> 
                            <button className="btn waves-effect waves-light btn-limpar" type="submit" name="action">Limpar</button>
                            <button className="btn waves-effect waves-light btn-cadastrar" type="submit" name="action">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

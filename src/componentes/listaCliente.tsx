/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import FormularioCadastroCliente from "./formularioCadastroCliente";


type props = {
    tema: string,
    registrarConsumo: () => void
}


export default class ListaCliente extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="collection margin-left campo custom-form-width sombra">
                <table className="col s12 margin-left">
                        <thead>
                            <tr className="titulo3">
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Contato</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ana</td>
                                <td>123</td>
                                <td>(00)12365489</td>
                                <a className="waves-effect waves-light btn-small btn-consumo"onClick={this.props.registrarConsumo}>Registrar Consumo</a>
                            </tr>
                            <tr>
                                <td>Guilherme</td>
                                <td>458587</td>
                                <td>(00)4687213</td>
                                <a className="waves-effect waves-light btn-small btn-consumo"onClick={this.props.registrarConsumo}>Registrar Consumo</a>
                            </tr>
                        </tbody>
                    </table>
            </div>
        )
    }
}
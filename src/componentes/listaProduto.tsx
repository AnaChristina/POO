/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string
}

export default class ListaProduto extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="collection margin-left campo custom-form-width sombra">
                <table className="col s12 margin-left">
                        <thead>
                            <tr className="titulo3">
                                <th>Produto</th>
                                
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Produto 1</td>
                                
                                <td>R$ 10,00</td>
                            </tr>
                            <tr>
                                <td>Produto 2</td>
                                
                                <td>R$ 100,00 </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        )
    }
}
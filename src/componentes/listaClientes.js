/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaClientes(props) {
    const estilo = `collection-item active ${props.tema}`;
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
                        <td>
                            <a className="waves-effect waves-light btn-small btn-consumo" onClick={props.registrarConsumo}>Registrar Consumo</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Guilherme</td>
                        <td>458587</td>
                        <td>(00)4687213</td>
                        <td>
                            <a className="waves-effect waves-light btn-small btn-consumo" onClick={props.registrarConsumo}>Registrar Consumo</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

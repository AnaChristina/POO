/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaServico(props) {
    const estilo = `collection-item active ${props.tema}`;
    return (
        <div className="collection margin-left campo custom-form-width sombra">
                    <table className="col s12 margin-left">
                            <thead>
                                <tr className="titulo3">
                                    <th>Serviço</th>
                                    
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Serviço 1</td>
                                    
                                    <td>R$ 10,00</td>
                                </tr>
                                <tr>
                                    <td>Serviço 2</td>
                                    
                                    <td>R$ 100,00 </td>
                                </tr>
                            </tbody>
                        </table>
                </div>
    )}
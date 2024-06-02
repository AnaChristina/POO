/* eslint-disable jsx-a11y/anchor-is-valid */
export default function RegistroConsumo(props) {
    const estilo = `collection-item active ${props.tema}`;
    return (
        <div className="row">
            <p className="titulo2">Registrar Consumo</p>
            <div className="collection col s12">
                <div className="campo custom-form-width sombra col s12">
                    <div className="row">
                        <div className="col s12">
                            <p className="dados-cliente">CLIENTE: GERSON PENHA DA SILVA SAURO</p>
                            <p className="dados-cliente">CPF: 123.456.789-10</p>
                            <p className="dados-cliente">CONTATO:(12)99000-0000</p>
                        </div>
                        <div className="col s6 right-align">
                            <p className="dados-cliente">GENERO: M</p>
                        </div>
                    </div>
                </div>

                <div className="col s12 mtop">
                    <form className="col s5 campo sombra mright">
                        <span className="titulo2">Registrar Consumo de Serviço</span>
                        <div className="input-field row s3">
                            <input id="nome_servico" type="text" className="validate" />
                            <label htmlFor="nome_servico">Serviço Consumido: </label>
                        </div>
                        <div className="input-field row s3">
                            <input id="quantidade_servico" type="text" className="validate" />
                            <label htmlFor="quantidade_servico">Quantidade Consumida: </label>
                        </div>
                        <div className="row">
                            <div className="col s12 mr">
                                <button className="btn waves-effect waves-light btn-limpar" type="submit" name="action">Cancelar</button>
                                <button className="btn waves-effect waves-light btn-cadastrar" type="submit" name="action">Registrar</button>
                            </div>
                        </div>
                    </form>

                    <form className="col s5 campo sombra">
                        <span className="titulo2">Registrar Consumo de Produto</span>
                        <div className="input-field row s3">
                            <input id="nome_produto" type="text" className="validate" />
                            <label htmlFor="nome_produto">Produto Consumido: </label>
                        </div>
                        <div className="input-field row s5">
                            <input id="quantidade_produto" type="text" className="validate" />
                            <label htmlFor="quantidade_produto">Quantidade Consumida: </label>
                        </div>
                        <div className="row">
                            <div className="col s12 mr">
                                <button className="btn waves-effect waves-light btn-limpar" type="submit" name="action">Cancelar</button>
                                <button className="btn waves-effect waves-light btn-cadastrar" type="submit" name="action">Registrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )}
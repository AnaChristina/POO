import { useEffect } from 'react';
import M from 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css';


/* eslint-disable jsx-a11y/anchor-is-valid */
export default function CadastroProduto(props) {

    const handleClick = () => {
        console.log('Limpo');
    }

    useEffect(() => {
        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }, []);
    const estilo = `collection-item active ${props.tema}`;
    return (
        <div className="row">
            <form className="col s4">
                <div className="row campo sombra">
                    <div className="input-field col s12">
                        <input id="nome_produto" type="text" className="validate" />
                        <label htmlFor="nome_produto">Nome do Produto</label>
                    </div>

                    <div className="input-field col s6">
                        <input id="valor_produto" type="text" className="validate" />
                        <label htmlFor="valor_produto">Valor:</label>
                    </div>

                    <div className="row">
                        <div className="col s12 mr">
                            <button className="btn waves-effect waves-light btn-limpar" onClick={handleClick} type="submit" name="action">Limpar</button>
                            <button className="btn waves-effect waves-light btn-cadastrar" type="submit" name="action">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="col s12">
                <div className="input-field border-select col s3 campo sombra border-select">
                    <select>
                        <option value="AAA" disabled selected>Mostrar aqui os produtos recem cadastrados</option>
                        <option value="1">Produto 1</option>
                        <option value="2">Produto 2</option>
                        <option value="3">Produto 3</option>
                    </select>
                </div>
                <div className="input-field border-select col s2 campo sombra">
                    <select>
                        <option value="AAA" disabled selected>Produtos mais consumidos</option>
                        <option value="1">Produto 1</option>
                        <option value="2">Produto 2</option>
                        <option value="3">Produto 3</option>
                    </select>
                </div>
                <div className="input-field border-select col s2 campo sombra">
                    <select>
                        <option value="" disabled selected className="material-icons">maior consumo feminino</option>
                        <option value="1">Produto 1</option>
                        <option value="2">Produto 2</option>
                        <option value="3">Produto 3</option>
                    </select>
                    <label><i className="material-icons custom-icon-pink">female</i></label>
                </div>
                <div className="input-field border-select col s2 campo sombra">
                    <select>
                        <option value="" disabled selected>maior consumo masculino</option>
                        <option value="1">Produto 1</option>
                        <option value="2">Produto 2</option>
                        <option value="3">Produto 3</option>
                    </select>
                    <label><i className="material-icons custom-icon-blue">male</i></label>
                </div>
            </div>
        </div>
    );
}

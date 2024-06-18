import axios from 'axios';
import React, { useState } from 'react';

export default function Cadastro() {
    const [valoresFormulario, setValoresFormulario] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        endereco: {
            estado: '',
            cidade: '',
            bairro: '',
            rua: '',
            numero: '',
            codigoPostal: '',
            informacoesAdicionais: '',
            links: []
        },
        telefones: [
            {
                ddd: '',
                numero: '',
                links: []
            }
        ],
        links: [
            {
                rel: '',
                href: ''
            }
        ]
    });

    const alterarValor = (e) => {
        const { id, value } = e.target;
        if (id.startsWith('endereco-')) {
            const chaveAninhada = id.replace('endereco-', '');
            setValoresFormulario({
                ...valoresFormulario,
                endereco: {
                    ...valoresFormulario.endereco,
                    [chaveAninhada]: value
                }
            });
        } else if (id.startsWith('telefones-') || id.startsWith('links-')) {
            const tipoCampo = id.split('-')[0];
            const chaveAninhada = id.replace(`${tipoCampo}-`, '');
            setValoresFormulario({
                ...valoresFormulario,
                [tipoCampo]: [
                    {
                        ...valoresFormulario[tipoCampo][0],
                        [chaveAninhada]: value
                    }
                ]
            });
        } else {
            setValoresFormulario({ ...valoresFormulario, [id]: value });
        }
    };

    const cadastrarCliente = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:32832/cliente/cadastrar", valoresFormulario);
            console.log("Cliente cadastrado com sucesso:", data);
            setValoresFormulario({
                nome: '',
                sobrenome: '',
                email: '',
                endereco: {
                    estado: '',
                    cidade: '',
                    bairro: '',
                    rua: '',
                    numero: '',
                    codigoPostal: '',
                    informacoesAdicionais: '',
                    links: []
                },
                telefones: [
                    {
                        ddd: '',
                        numero: '',
                        links: []
                    }
                ],
                links: [
                    {
                        rel: '',
                        href: ''
                    }
                ]
            });
        } catch (error) {
            console.error("Erro ao cadastrar cliente:", error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m8 offset-m2">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Cadastro</span>

                            <form onSubmit={cadastrarCliente}>
                                
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="Nome" id="nome" type="text" className="validate" value={valoresFormulario.nome} onChange={alterarValor} />
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="Sobrenome" id="sobrenome" type="text" className="validate" value={valoresFormulario.sobrenome} onChange={alterarValor} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="E-mail" id="email" type="email" className="validate" value={valoresFormulario.email} onChange={alterarValor} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <span className="card-title">Endereço</span>
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="Estado" id="endereco-estado" type="text" className="validate" value={valoresFormulario.endereco.estado} onChange={alterarValor} />
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="Cidade" id="endereco-cidade" type="text" className="validate" value={valoresFormulario.endereco.cidade} onChange={alterarValor} />
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="Bairro" id="endereco-bairro" type="text" className="validate" value={valoresFormulario.endereco.bairro} onChange={alterarValor} />
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="Rua" id="endereco-rua" type="text" className="validate" value={valoresFormulario.endereco.rua} onChange={alterarValor} />
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="Número" id="endereco-numero" type="text" className="validate" value={valoresFormulario.endereco.numero} onChange={alterarValor} />
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="CEP" id="endereco-codigoPostal" type="text" className="validate" value={valoresFormulario.endereco.codigoPostal} onChange={alterarValor} />
                                    </div>
                                    <div className="input-field col s12">
                                        <input placeholder="Informações adicionais" id="endereco-informacoesAdicionais" type="text" className="validate" value={valoresFormulario.endereco.informacoesAdicionais} onChange={alterarValor} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s12">
                                        <span className="card-title">Contato</span>
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="DDD" id="telefones-ddd" type="text" className="validate" value={valoresFormulario.telefones[0].ddd} onChange={alterarValor} />
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="Telefone" id="telefones-numero" type="text" className="validate" value={valoresFormulario.telefones[0].numero} onChange={alterarValor} />
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="Links" id="links-href" type="text" className="validate" value={valoresFormulario.links[0].href} onChange={alterarValor} />
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="Rel" id="links-rel" type="text" className="validate" value={valoresFormulario.links[0].rel} onChange={alterarValor} />
                                    </div>
                                </div>

                                <div className="row">
                                    <button className="btn waves-effect waves-light col s12" type="submit" name="action">Cadastrar
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

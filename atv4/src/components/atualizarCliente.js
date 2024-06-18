import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function AtualizarCliente({ clienteId }) {
    const [cliente, setCliente] = useState({
        id: clienteId,
        nome: '',
        sobrenome: '',
        email: '',
        endereco: '',
        estado: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        cep: '',
        informacoesAdicionais: '',
        telefones: [],
        links: []
    });

    useEffect(() => {
        // Aqui você pode fazer uma requisição para buscar os dados atuais do cliente pelo ID
        // No exemplo, estou apenas definindo alguns dados fictícios para ilustração
        const dadosCliente = {
            id: clienteId,
            nome: 'Fulano',
            sobrenome: 'Silva',
            email: 'fulano@email.com',
            endereco: 'Rua Principal',
            estado: 'Estado',
            cidade: 'Cidade',
            bairro: 'Bairro',
            rua: 'Rua Principal',
            numero: '123',
            cep: '12345-678',
            informacoesAdicionais: 'Informações adicionais',
            telefones: [
                { id: 1, ddd: '11', numero: '99999-9999' },
                { id: 2, ddd: '11', numero: '88888-8888' }
            ],
            links: []
        };

        setCliente(dadosCliente);
    }, [clienteId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Atualizando cliente:", cliente);
        try {
            // Simular uma requisição PUT para atualizar os dados do cliente
            await axios.put(`http://localhost:32832/clientes/${cliente.id}`, cliente);
            console.log("Cliente atualizado com sucesso!");
            // Lógica para exibir mensagem de sucesso ou redirecionar, se necessário
        } catch (error) {
            console.error("Erro ao atualizar cliente:", error);
            // Lógica para tratamento de erros, se necessário
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCliente(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            placeholder="Nome"
                            id="nome"
                            type="text"
                            className="validate"
                            name="nome"
                            value={cliente.nome}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="Sobrenome"
                            id="sobrenome"
                            type="text"
                            className="validate"
                            name="sobrenome"
                            value={cliente.sobrenome}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="E-mail"
                            id="email"
                            type="email"
                            className="validate"
                            name="email"
                            value={cliente.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="Endereço"
                            id="endereco"
                            type="text"
                            className="validate"
                            name="endereco"
                            value={cliente.endereco}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-field col s6">
                        <input
                            placeholder="Estado"
                            id="estado"
                            type="text"
                            className="validate"
                            name="estado"
                            value={cliente.estado}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="Cidade"
                            id="cidade"
                            type="text"
                            className="validate"
                            name="cidade"
                            value={cliente.cidade}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="Bairro"
                            id="bairro"
                            type="text"
                            className="validate"
                            name="bairro"
                            value={cliente.bairro}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="Rua"
                            id="rua"
                            type="text"
                            className="validate"
                            name="rua"
                            value={cliente.rua}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="Número"
                            id="numero"
                            type="text"
                            className="validate"
                            name="numero"
                            value={cliente.numero}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="CEP"
                            id="cep"
                            type="text"
                            className="validate"
                            name="cep"
                            value={cliente.cep}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="Informações adicionais"
                            id="info"
                            type="text"
                            className="validate"
                            name="informacoesAdicionais"
                            value={cliente.informacoesAdicionais}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-field col s6">
                        <input
                            placeholder="Telefone"
                            id="telefone"
                            type="text"
                            className="validate"
                            name="telefones"
                            value={cliente.telefones.length > 0 ? cliente.telefones[0].numero : ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="DDD"
                            id="ddd"
                            type="text"
                            className="validate"
                            name="telefones"
                            value={cliente.telefones.length > 0 ? cliente.telefones[0].ddd : ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="Link"
                            id="link"
                            type="text"
                            className="validate"
                            name="links"
                            value={cliente.links.length > 0 ? cliente.links[0].href : ''}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-field col s6">
                        <input
                            placeholder="Links"
                            id="links"
                            type="text"
                            className="validate"
                            name="links"
                            value={cliente.links.length > 0 ? cliente.links[0].rel : ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="Rel"
                            id="rel"
                            type="text"
                            className="validate"
                            name="rel"
                            value={cliente.links.length > 0 ? cliente.links[0].rel : ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="Href"
                            id="href"
                            type="text"
                            className="validate"
                            name="href"
                            value={cliente.links.length > 0 ? cliente.links[0].href : ''}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="btn waves-effect waves-light" type="submit" name="action">Atualizar
                        <i className="material-icons right">update</i>
                    </button>
                </div>
            </form>
        </div>
    );
}

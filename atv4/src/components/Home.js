import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';



export default function Home() {

    const [clientes, setClientes] = useState([]);
    const [id, setIdPesquisa] = useState('');
    const [clienteSelecionado, setClienteSelecionado] = useState('');



    const buscarClientes = async (event) => {
        console.log("Buscando clientes...");
        try{
            const {data} = await axios.get("http://localhost:32832/clientes");
            console.log(data);
            setClientes([data]);
        }
        catch (error){
            if(error.response.status !=500){
            console.log(error.response.data)
            setClientes(error.response.data);
        }
        else if(error.response.status ===500){
            console.log(error)
        }
        else {
            setClientes([]);
        }
        }
    };

    const PesquisaCliente = async (event) =>{
        event.preventDefault();
        console.log("Pesquisando cliente...");

        try{
            if (!id) {
                buscarClientes();
            } else {
                const {data} = await axios.get(`http://localhost:32832/cliente/${id}`)
                console.log(data);
                setClientes([data]);
            }

        }
        catch(error){
            console.log(error)
            if(error.response.status !=500){
                console.log(error.response.data)
                setClientes([error.response.data]);
        }}
    }

    const Excluir = async (clienteId) => {
        console.log("Excluindo cliente...");
        try {
            await axios.delete("http://localhost:32832/cliente/excluir", { data: { id: clienteId } });
            console.log("Cliente excluído com sucesso!");
            buscarClientes();
        } catch (error) {
            console.error("Erro ao excluir cliente:", error);
        }
    };



    const VerMais = async (clienteId) => {
        try {
        const { data } = await axios.get(`http://localhost:32832/cliente/${clienteId}`);
        console.log("Detalhes do cliente:", data);
        setClienteSelecionado(data);
        }
        catch (error) {
            if(error.response.status !=500){
                console.log(error.response.data)
                setClienteSelecionado(error.response.data);
            }
            else if(error.response.status ===500){
                console.log(error)
            }
            else{
                setClienteSelecionado([])
            }
        }
    };

    
    const Atualizar = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:32832/cliente/atualizar`, clienteSelecionado);
            console.log("Cliente atualizado com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar cliente:", error);
        }

        console.log("AQUI",clienteSelecionado)
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        const keys = name.split('.');

        setClienteSelecionado(prevState => {
            let updatedState = { ...prevState };

            if (keys.length === 1) {
                updatedState[keys[0]] = value;
            } else {
                let nested = updatedState;
                for (let i = 0; i < keys.length - 1; i++) {
                    nested = nested[keys[i]];
                }
                nested[keys[keys.length - 1]] = value;
            }

            return updatedState;
        });
    };
    


    useEffect(() => {
        buscarClientes();
    }, []);



    return (
        <div>
            <div className="row">
            <form className="col s12" onSubmit={PesquisaCliente}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                placeholder="PESQUISAR CLIENTE"
                                id="id"
                                type="text"
                                className="validate"
                                value={id}
                                onChange={(e) => setIdPesquisa(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className="btn waves-effect" type="submit" name="action">Pesquisar
                        <i className="material-icons right">search</i>
                    </button>
                </form>
            </div>

            <div>
            <label className="txt">Lista de clientes</label><hr />
                <div>
                    <table className="striped responsive-table centered">
                        <thead className="cabecalho">
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody id="cliente-list">
                            {clientes.length > 0 ? (
                                clientes.map(cliente => (
                                    <tr key={cliente.id}>
                                        <td>{cliente.id}</td>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.email}</td>
                                        <td>{cliente.telefones.length > 0 ? `(${cliente.telefones[0].ddd}) ${cliente.telefones[0].numero}` : '-'}</td>
                                        <td>
                                            <button className="waves-effect waves-light btn" onClick={() => VerMais(cliente.id)}>Ver mais</button>
                                            <button className="waves-effect waves-light btn red" onClick={() => Excluir(cliente.id)}>Excluir</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">Nenhum cliente encontrado</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {clienteSelecionado && (
                <div className="row">
                    <form className="col s12" onSubmit={Atualizar}>
                        <h2>Detalhes do Cliente</h2>

                        <div className="row">
                            <div className="input-field col s6">
                                <input id="id" type="text" value={clienteSelecionado.id} readOnly />
                                <label htmlFor="id" className="active">ID</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="nome" type="text" name="nome" value={clienteSelecionado.nome} onChange={handleChange} />
                                <label htmlFor="nome" className="active">Nome</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="sobreNome" type="text" name="sobreNome" value={clienteSelecionado.sobreNome} onChange={handleChange} />
                                <label htmlFor="sobreNome" className="active">Sobrenome</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="email" type="email" name="email" value={clienteSelecionado.email} onChange={handleChange} />
                                <label htmlFor="email" className="active">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="rua" type="text" name="endereco.rua" value={clienteSelecionado.endereco.rua} onChange={handleChange} />
                                <label htmlFor="rua" className="active">Rua</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="numero" type="text" name="endereco.numero" value={clienteSelecionado.endereco.numero} onChange={handleChange} />
                                <label htmlFor="numero" className="active">Número</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="bairro" type="text" name="endereco.bairro" value={clienteSelecionado.endereco.bairro} onChange={handleChange} />
                                <label htmlFor="bairro" className="active">Bairro</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="cidade" type="text" name="endereco.cidade" value={clienteSelecionado.endereco.cidade} onChange={handleChange} />
                                <label htmlFor="cidade" className="active">Cidade</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="informacoesAdicionais" className="materialize-textarea" name="endereco.informacoesAdicionais" value={clienteSelecionado.endereco.informacoesAdicionais} onChange={handleChange}></textarea>
                                <label htmlFor="informacoesAdicionais" className="active">Informações Adicionais</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="ddd" type="text" name="telefones.0.ddd" value={clienteSelecionado.telefones[0].ddd} onChange={handleChange} />
                                <label htmlFor="ddd" className="active">DDD</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="numeroTelefone" type="text" name="telefones.0.numero" value={clienteSelecionado.telefones[0].numero} onChange={handleChange} />
                                <label htmlFor="numeroTelefone" className="active">Número de Telefone</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Atualizar
                                <i className="material-icons right">border_color</i>
                            </button>
                        </div>
                        <div className="row">
                            <button className="btn waves-effect waves-light red" type="button" name="action" onClick={() => Excluir(clienteSelecionado.id)}>Excluir
                                <i className="material-icons right">delete</i>
                            </button>
                        </div>
                    </form>
    </div>
    )}
        </div>
    );
}

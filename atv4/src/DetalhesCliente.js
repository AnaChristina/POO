import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DetalhesCliente(props) {
const [cliente, setCliente] = useState(null);

useEffect(() => {
const fetchCliente = async () => {
    try {
    const { data } = await axios.get(`http://localhost:32832/cliente/${props.match.params.id}`);
    setCliente(data);
    } catch (error) {
    console.error("Erro buscar cliente:", error);
    }
};

fetchCliente();
}, [props.match.params.id]);

if (!cliente) {
return <div>Carregando...</div>;
}

return (
<div>
    <h2>Detalhes do Cliente</h2>
    <p>ID: {cliente.id}</p>
    <p>Nome: {cliente.nome}</p>
    <p>E-mail: {cliente.email}</p>
    {/* Adicione outros campos conforme necessário */}
</div>
);
}

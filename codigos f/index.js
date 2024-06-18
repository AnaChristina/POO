import axios from 'axios';

console.log("Conectado com o javascript!! 📍")


async function listaClientes(){
    const response = await axios.get("http://localhost:32832/clientes")
    console.log(response.data)
}

listaClientes()

// async function buscarClientes() {
//     try {
//         const response = await axios.get("http://localhost:32832/clientes");
//         console.log(response)
//         console.log('AQUI')
//         const clientes = response.data;
//         const clienteList = document.getElementById('cliente-list');
//         clienteList.innerHTML = '';
//         console.log(clientes)

        // clientes.forEach(cliente => {
        //     const tr = document.createElement('tr');
        //     tr.innerHTML = `
        //         <td>${clientes.id}</td>
        //         <td>${clientes.nome}</td>
        //         <td>${clientes.email}</td>
        //         <td>${clientes.telefone}</td>
        //     `;
        //     clienteList.appendChild(tr);
        // });
//     } catch (error) {
//         console.error('Erro ao buscar clientes:', error);
//     }
// }

// Chama a função buscarClientes automaticamente ao carregar a página para exibir todos os clientes
// document.addEventListener('DOMContentLoaded', buscarClientes);

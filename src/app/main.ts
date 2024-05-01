import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import listagemClientes from "../negocio/listagemClientes";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log("3 - Listar todos os clientes masculinos");
    console.log("4 - Listar todos os clientes femininos");
    console.log("5 - Cadastrar produto");
    console.log("6 - Cadastrar serviço");
    console.log("7 - registrar compra/consumo do cliente");
    console.log("8 - Listar todos os produtos"); //Listagem geral dos serviços ou produtos mais consumidos.
    console.log("9 - Listar serviços mais consumidos por gênero"); //Listagem dos serviços ou produtos mais consumidos por gênero pode ser M e F juntos no msm console
    console.log("10 - Clientes com menos consumo em quantidade"); //Listagem dos 10 clientes que menos consumiram produtos ou serviços.
    console.log("11 - Clientes com mais consumo em valor"); //Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.
    console.log("12 - Produtos mais consumidos");

    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
            
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;

        case 3:
            let listagemGeneroMasculino = new ListagemClientes(empresa.getClientes);
            listagemGeneroMasculino.listarGeneroMasculino();
            break;

        case 4:
            let listagemGeneroFeminino = new ListagemClientes(empresa.getClientes);
            listagemGeneroFeminino.listarGeneroFeminino();
            break;

        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 6:
            // cadastrar serviço
            break;

        case 7:
            let cpfCliente = entrada.receberTexto(`Digite o CPF do cliente: `);
            let clienteSelecionado = empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpfCliente);

            if (clienteSelecionado) {
                let produtoConsumido = entrada.receberTexto(`Digite o produto consumido: `);
                let produtoSelecionado = empresa.getProdutos.find(produto => produto.getNome === produtoConsumido);

                if (produtoSelecionado) {
                    clienteSelecionado.adicionarProdutoConsumido(produtoSelecionado);
                    produtoSelecionado.adicionarConsumo();
                    console.log(`Quantidade consumida do produto ${produtoSelecionado.getNome}: ${produtoSelecionado.getQuantidadeConsumida}`);
                    console.log("Compra/consumo registrada com sucesso! 🤩");
                    console.log("------------------------------------------\n")
                } else {
                    console.log("Produto não encontrado.\n");
                }
            }
            else {
                console.log("Cliente não encontrado.");
            }
            break;

        case 8:
            let ListaProdutos = new ListagemProdutos(empresa.getProdutos); //Mudar p Listagem geral dos produtos mais consumidos dps
            ListaProdutos.listar();
            //os produtos consumidos esta em lista, então tenho que ver o tamanho da lista dos produtos (lenght) e comparar. Montar lista do mais consumido até o menos. 
            
            break;
            
        case 9:
            // Listar produtos mais consumidos por gênero
            const listagemConsumoGenero = new ListagemClientes(empresa.getClientes);
            listagemConsumoGenero.listarItensMaisConsumidosPorGenero("M"); // Para gênero Masculino
            listagemConsumoGenero.listarItensMaisConsumidosPorGenero("F"); // Para gênero Feminino
            break;

            //Listagem dos serviços ou produtos mais consumidos por gênero pode ser M e F juntos no msm console
                
        case 10:
            ListagemClientes.listarTop5ClientesMenosConsumidores(empresa.getClientes);
            break;

        case 11://Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.
            const listagemClientes = new ListagemClientes(empresa.getClientes);
            listagemClientes.listarTop5ClientesPorValor();
        break;

        case 12:
            let MaisConsumido = new ListagemProdutos(empresa.getProdutos);
            MaisConsumido.listarProdutosMaisConsumidos();
            break;
        

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida ☹️`)
    }
}
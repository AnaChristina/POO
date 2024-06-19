// routes/clientes.ts

import express, { Request, Response } from 'express';
import Empresa from '../modelo/empresa';
import Cliente from '../modelo/cliente';
import CadastroCliente from '../negocio/cadastroCliente';

const router = express.Router();
const empresa = new Empresa();

// Rota para cadastrar um cliente
router.post('/', (req: Request, res: Response) => {
    const { nome, nomeSocial, cpf, genero } = req.body;
    const cliente = new Cliente(nome, nomeSocial, cpf, genero);
    const cadastro = new CadastroCliente(empresa.getClientes);
    cadastro.cadastrar(cliente);
    res.status(201).send('Cliente cadastrado com sucesso');
});

export default router;

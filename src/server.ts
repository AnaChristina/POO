// server.ts

import express from 'express';
import bodyParser from 'body-parser';
import clientesRouter from './routes/clientes'; // Importe corretamente o arquivo de rotas de clientes

const app = express();
const port = 4000;

app.use(bodyParser.json());

// Registre o roteador de clientes com o prefixo /api/clientes
app.use('/api/clientes', clientesRouter);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor backend rodando em http://localhost:${port}`);
});

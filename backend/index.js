const express = require('express');

const app = express();

// Esta cadastrando a informação para entender informação que o corpo seja json
// https://youtu.be/tqdw5KVx4ps?t=2288
app.use(express.json());

// Método HTTP: GET, POST, PUT, DELETE

// Tipos de parámetros:

    // Query Params: request.query (Utilizados para: Filtros, Ordenação, Paginação, ...)
    // Route Params: request.params (Identifica um recurso na alteração ou remoção)
    // Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.get('/users', (request, response) => {

    console.log(request.query);

    return response.json({ message: 'Ola Nodejs!'});
});

app.listen(3333);
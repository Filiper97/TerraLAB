//Metodos HTTP: GET, POST, PUT, DELETE
//TIPOS DE PARAMETROS:
//Query Params: request.query (Filtros, ordenação, paginação...)
//Route params: request.params (Dados para criação ou alteração de um registro)
//Body: request.body (dados para criação ou alteração de um registro)


const { request } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


mongoose.connect('mongodb+srv://Projeto-TerraLAB:3squad@cluster0.h5oaj.mongodb.net/squad3?retryWrites=true&w=majority', { 
    useNewUrlParser: true, useUnifiedTopology: true });
 
app.use(express.json())
app.use(routes);



app.listen(3333);

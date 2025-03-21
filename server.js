const express = require('express');
const pokemon = require('./src/pokemon.js');
const app = express();
const { v4: uuid } = require('uuid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/pokemon', pokemon);  

app.listen(8000, function() {
    console.log('Starting server');
});
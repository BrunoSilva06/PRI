const express = require('express');
const router = express.Router();
const fs = require('fs')
var Pubs = require('../../controllers/pubs')

router.get('/', (req, res) => {
    Premio.listaAutores()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem de autores!'));
});

module.exports = router;
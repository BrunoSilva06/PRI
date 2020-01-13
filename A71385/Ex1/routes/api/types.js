const express = require('express');
const router = express.Router();
const fs = require('fs')
var Pubs = require('../../controllers/pubs')

router.get('/', (req, res) => {
    Pubs.listaTypes()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem de types!'));
});

module.exports = router;
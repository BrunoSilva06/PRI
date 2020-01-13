const express = require('express');
const router = express.Router();
const fs = require('fs')
var Pubs = require('../../controllers/pubs')



router.get('/', (req, res) => {
    var purl = url.parse(req.url, true);
    var query = purl.query;
    Pubs.listaPubsCondicional(query.type, query.year, query.autor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem das publicações!'));
});

router.get('/:id', (req, res) => {
    Pubs.listarPub(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem pelo id!'));
});

module.exports = router;
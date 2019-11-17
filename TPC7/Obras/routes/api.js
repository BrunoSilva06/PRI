const express = require('express');
const router = express.Router();


var Obras = require('../controllers/obras');


// GET : lista de Obras
router.get('/obras', function(req,res) {
    if(req.query.periodo){
        Obras.getPeriodo(req.query.periodo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if (req.query.anoCriacao){
        Obras.getAno(req.query.anoCriacao)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.compositor){
        Obras.getObrasCompositor(req.query.compositor)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else{
        Obras.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
})


router.get('/compositores', function (req,res) {
    Obras.getCompositores()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/compositores/:nome', function (req,res) {
    Obras.getCompositor(req.params.nome)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})





module.exports = router
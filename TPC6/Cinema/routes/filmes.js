var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  axios.get('http://localhost:3006/api/filmes')
      .then(dados => {
        res.render('lista-filmes', { lista: dados.data });
      })
      .catch(erro => {
        res.render('error', {error: erro})
      })
});

router.get('/inserir', function(req, res) {
        res.render('form-filme');
});


router.post('/', function(req,res){
    axios.post('http://localhost:3006/api/filmes', req.body)
    .then(dados => {
      res.redirect('/')
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

module.exports = router;

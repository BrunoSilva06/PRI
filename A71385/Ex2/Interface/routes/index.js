var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res) {
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(resposta => res.render('index', {lista: resposta.data}))
      .catch(erro => {
          res.render('error', {title: 'Erro', error: erro, message: ''})
      });
});

/*
router.get('/tipologias/:cid', (req, res) => {
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.cid + '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(resposta => res.render('tipologia', {lista: resposta.data}))
      .catch(erro => {
          res.render('error', {title: 'Erro', error: erro, message: ''});
      });
});
*/

router.get('/tipologias/:cid', (req, res) => {
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.cid + '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(resposta => {
          var tipo = resposta.data;
          axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.cid + '/elementos' +  '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
              .then(resposta2 => {
                  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.cid + '/intervencao/dono' + '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
                      .then(resposta3 => {
                          res.render('tipologia', {lista: tipo, ent: resposta2.data, proc: resposta3.data});
                      })
                      .catch(erro => {
                        res.render('error', {title: 'Erro', error: erro, message: ''});
                    })
              })
              .catch(erro => {
                  res.render('error', {title: 'Erro', error: erro, message: ''});
              })
      })
      .catch(erro => {
          res.render('error', {title: 'Erro', error: erro, message: ''});
      });
});


module.exports = router;

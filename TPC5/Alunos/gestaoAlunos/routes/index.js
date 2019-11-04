var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var nanoid = require('nanoid')

var myBD = __dirname + "/../data/listaAlunos.json"

/* GET home page. */
router.get('/Alunos', function(req, res) {
  jsonfile.readFile(myBD, (erro, dados) => {
    if(!erro){
        res.render('index', {lista: dados})              
    }
    else{
        res.render('error', {error: erro})  
    }
  }) 
})

router.get('/Alunos/:idAluno', function(req, res) {
  var id = req.params.idAluno
  jsonfile.readFile(myBD, (erro, alunos) => {
    if(!erro){
        var index = alunos.findIndex(a => a.Id == id)
        console.log(index)
        if(index > -1){
           var aluno = alunos[index]
           console.log(aluno)
           res.render('student', {person : aluno})
        }
        else{
          console.log('Aluno not found!')
          res.render('error', {error : erro})
        }            
    }
  }) 
})


module.exports = router;

var Filme = require('../models/filmes');

const Filmes = module.exports



//Devolve a lista  de filmes
Filmes.listar = () => {
    return Filme
        .find()
        .exec()
}


Filmes.consultar = id => {
    return Filme
        .findOne({_id : id})
        .exec()
}


Filmes.contar = () => {
    return Filme
        .countDocuments()
        .exec()
}

Filmes.inserir = filme => {
    var novo = new Filme(filme)
    return novo.save()
}
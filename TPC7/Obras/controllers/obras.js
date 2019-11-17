var Obra = require('../models/obras');
const Obras = module.exports



//Devolve a lista  de Obras
Obras.listar = () => {
    return Obra
        .find()
        .exec()
}

Obras.getPeriodo = p => {
    return Obra
        .find({periodo : p})
        .exec()
}

Obras.getAno = ano => {
    return Obra
        .find({anoCriacao : ano})
        .exec()
}

Obras.getObrasCompositor = nome => {
    return Obra
        .find({compositor : nome})
        .exec()
}

Obras.getCompositor = nome => {
    return Obra
        .findOne({compositor : nome}, {compositor : 1})
        .exec()
}

Obras.getCompositores = () => {
    return Obra
        .distinct('compositor')
        .exec()
}


Obras.contar = () => {
    return Obra
        .countDocuments()
        .exec()
}

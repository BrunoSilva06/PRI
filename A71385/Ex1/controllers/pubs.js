var Pub = require('../models/pubs')


const Pubs = module.exports


Pubs.listaPubsCondicional = (tipo, ano, autor) => {
    if (tipo && ano) {
        return Pub.find({
                            type: tipo, 
                            year: {$gt: ano}
                        })
                      .exec();
    }
    else if (tipo && !ano) {
        return Pub.find({type: tipo})
                         .exec();
    }
    else if (autor){
        return Pub.find({author: autor})
                         .exec();
    }
    else {
        /* Lista com id, title, ano e type */
        return Pub.find({},{_id: 1, title: 1, year: 1, type: 1}) 
                     .exec();
    }
}


Pubs.consultar = id => {    
    return Pub
        .findOne({_id: id})
        .exec()
}


Pubs.listaTypes = () => {
    return Pub.distinct("type")
                 .exec();
}

Pubs.listaAutores = () => {
    return Pub.aggregate(
                [{$unwind:"$laureates"}, 
                {$sort: {"laureates.firstname": -1, "laureates.surname": -1}}, 
                ]
                )
                .exec();
}
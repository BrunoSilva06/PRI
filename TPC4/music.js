var http = require('http');
var fs = require('fs')


var myserver = http.createServer( function(req,res){

    var spl = req.url.split('/')
    var songNumber = spl[2]
    var song = spl[1]

    console.log(req.method + ' ' + req.url)

    if(req.method == 'GET'){
        
        if(req.url=="/"){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('Working on the main page...')
        }
        else if((song == 'song') && (parseInt(songNumber,10) > 0) && (parseInt(songNumber,10) < 449)){
            fs.readFile('data/doc' + songNumber + '.xml', (erro, dados)=>{
                if(!erro){
                    res.writeHead(200, {'Content-Type':'text/xml'}) 
                    res.write(dados);
                }
                else {
                    res.writeHead(200, {'Content-Type':'text/plain'}) 
                    res.write('Erro na leitura do ficheiro ' + 'data/doc' + songNumber + '.xml...')
                }
                res.end()  
            });      
        }
        else if(songNumber=="doc2html.xsl"){
            fs.readFile('doc2html.xsl', (erro, dados)=>{
                if(!erro){
                    res.writeHead(200, {'Content-Type':'text/xml'}) 
                    res.write(dados);
                }
                else {
                    res.writeHead(200, {'Content-Type':'text/plain'}) 
                    res.write('Erro na leitura do doc2html.xsl...')
                }
                res.end()  
            });
        }
        else if(req.url == '/w3.css'){
            fs.readFile('w3.css', (erro,dados)=>{
                if(!erro) {
                    res.writeHead(200, {'Content-Type': 'text/css'})
                    res.write(dados)
                }
                else {
                    res.writeHead(200, {'Content-Type': 'text/plain'})
                    res.write('Erro na leitura do w3.css')
                }
                res.end()
            })
        }
        else {
            res.end('Erro: Pedido não suportado [' + req.url + ']')
        }
    }
    
    else{
        res.end('Erro: Método não suportado [' + req.method + ']')

    }

})

myserver.listen(3021);


console.log('Servidor à escuta na porta 3021...')

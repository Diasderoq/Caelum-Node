const http = require('http')

const server = http.createServer(function(request,response){
    const rotas = []
    rotas['/'] = '<h1>Home</h1>'
    rotas['/Produto'] = '<h1>Produto</h1>'

    if(rotas[request.url]){
        console.log('tem a rota')
        response.end(rotas[request.url])    


    }else{
        console.log('nao tem')
        response.writeHead(404)
        response.end('Alguma coisa vc errou')
    }

    response.end(rotas[request.url])

})

server.listen(3000,'localhost',function terminou(){
    console.log('Servidor criado')
})























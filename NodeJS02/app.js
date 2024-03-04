
/*
Nessa aula, agora iremos aprender como criar um servidor no nodejs ultilizando o framework rápido EXPRESS
para instaar voc vai no diretorio do seu projeto no pronpt de comando e usa o seguinte codigo
npm install express --save
e vamos configurar o express agora
*/

//importacao do modulo express
const express = require("express")
//ultilizacao do express
const app = express()
//porta do servidor
app.listen(8801, function(){
    console.log("O servidor está ativo!")
})

//e depois no terminal iremos colocar, node app.js
//a maioria dos frameworks ultilizao conceitos de rotas que ultilizam um conceito chamado callback
// sempre faca um callback, para voce saber se as coisas estao realmente funcinando
//agora iremos criar as rodas via get

//pagina principal
app.get("/", function(req, res){
    res.end("Node JS")
})

//pagina de cadastro
app.get("/cadastrar", function(req, res){
    res.end("Pagina de Cadastro")
})

//pagina de contato
app.get("/contato", function(req, res){
    res.end("Pagina de Contato")
})



/*
app.listen(8801, function(){
    conlose.log("Servidor Rodando na porta 8801")
})
*/

//agora nos iremos aprender como carregar um arquivo nessas rotas (parametros)
//o item é o valor a ser passado pela url

app.get("/visualizar/:item/:calca/:blusa/:vestido", function(req, res){
    res.end(req.params.vestido)
 
})

//agora iremos nos apronfudar e pegar 2 parametros de uma vez
// \n faz quebrar o paragrafo
app.get("/visualizar/:item/:quantidade", function(req, res){
    res.end("Item: " + req.params.item +  "\n" + "Quantidade: " + req.params.quantidade )
 
})


// NODEMON

//iremos instalar o NodeMon, para ele atuaiar o server toda vez que a gente 
//mudar alguma coisa no arquivo
//para instalar iremos no terinal do projeto e daremos
//npm install nodemon -g

//agora pra ultilizar o nodemon voce no terminal irá dar um
//nodemon app.js
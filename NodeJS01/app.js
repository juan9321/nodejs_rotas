/*
console.log("Mensagem a ser exibida");

// Declaração de variáveis
var n1 = 10;
var n2 = 20;

// Realizando operações matemáticas
// Os sinais são os mesmos que no Java
var adicao = n1 + n2;
var subtracao = n1 - n2;
var multiplicacao = n1 * n2;
var divisao = n1 / n2;

// Exibindo resultados
console.log("Total:" + adicao);
console.log("Total:" + subtracao);
console.log("Total:" + multiplicacao);
console.log("Total:" + divisao);

// Condição usando if para a variável adicao
if (adicao === 30) {
    console.log("O total é igual a 30");
} else {
    console.log("O total é diferente de 30");
}

// Condição usando if-else para a variável subtracao
if (subtracao === -10) {
    console.log("O total é igual a -10");
} else {
    console.log("O total é diferente de -10");
}

// Condição usando if-else para a variável multiplicacao
if (multiplicacao === 200) {
    console.log("O total é igual a 200");
} else {
    console.log("O total é diferente de 200");
}

// Condição usando if-else para a variável divisao
if (divisao === 0.5) {
    console.log("O total é igual a 0,5");
} else {
    console.log("O total é diferente de 0,5");
}

// Chamada de funções de outro arquivo
var soma = require('./soma.js');
console.log("Total: " + soma(10, 10));

var subtracao = require('./subtracao.js');
console.log("Total: " + subtracao(10, 10));

var multiplicacao = require('./multiplicacao.js');
console.log("Total: " + multiplicacao(10, 10));

var divisao = require('./divisao.js');
console.log("Total: " + divisao(10, 10));
*/


// Nesta parte, criaremos um servidor utilizando Node.js
// Primeiro, criamos uma variável e requeremos o módulo http
// Este módulo já está instalado no Node, então não precisamos nos preocupar com a sua origem

var http = require('http');

// O req é a mensagem de requisição e o res é a resposta que será enviada de volta
http.createServer(function(req, res) {
    res.end("Mensagem direcionada");
}).listen(8801);

console.log("Servidor está ativo!");

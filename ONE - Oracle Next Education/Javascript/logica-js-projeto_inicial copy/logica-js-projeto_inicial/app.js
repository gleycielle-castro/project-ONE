alert('Boas vindas ao nosso site!');

let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = alert('Erro! Preencha todos os campos');

let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?")

if (idade >= 18) {
    console.log('Já pode tirar habilitação!')
}
else (idade < 18)
    console.log('Ainda não pode tirar carteira!');
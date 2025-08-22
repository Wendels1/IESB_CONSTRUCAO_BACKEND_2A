let prompt = require("prompt-sync")();

let nome = prompt("Qual é o seu nome: ")

console.log("Olá " + nome + ", seja bem-vindo(a) ao meu projeto de Node.js!")

let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require("./CalculadorNota")

let exerciciosA1 = parseFloat (prompt("Qual é a nota dos exercícios da A1: "))
let trabalhosA1 = parseFloat (prompt("Qual é a nota dos trabalhos da A1: "))
let provasA1 = parseFloat (prompt("Qual é a nota dos exercícios da A1: "))
let notaFinalA1 = calcularNotaA1(provasA1, exerciciosA1, trabalhosA1);

console.log("||| Calculando a nota A1... |||")
console.log("A Nota do Trabalhos A1 é: " + trabalhosA1)
console.log("A Nota dos Exercícios A1 é: " + exerciciosA1)
console.log("A Nota das Provas A1 é: " + provasA1)
console.log("A Nota Final da A1 é: " + notaFinalA1)
console.log("--------------------------------------------------")

let exerciciosA2 = parseFloat (prompt("Qual é a nota dos exercícios da A2: "))
let trabalhosA2 = parseFloat (prompt("Qual é a nota dos trabalhos da A2: "))
let provasA2 = parseFloat (prompt("Qual é a nota das provas da A2: "))
let notaFinalA2 = calcularNotaA2(provasA2, exerciciosA2, trabalhosA2);
console.log("||| Calculando a nota A2... |||")
console.log("A Nota do Trabalhos A2 é: " + trabalhosA2)
console.log("A Nota dos Exercícios A2 é: " + exerciciosA2)
console.log("A Nota das Provas A2 é: " + provasA2)
console.log("A Nota Final da A2 é: " + notaFinalA2)
console.log("--------------------------------------------------")

let notaFinal = calcularNotaFinal(notaA1, notaA2)

console.log("### Calculo da NOTA FINAL ###")
console.log("Nota Final: ", notaFinal)

if (notaFinal >= 5){
  console.log("Parabéns " + nome + ", você foi Aprovado!!!")
} else {
  console.log(nome + ", estude mais, infelizmente você foi Reprovado!!!")
}

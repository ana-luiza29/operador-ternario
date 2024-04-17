/*
Questão 9: Escreva um código JavaScript utilizando o operador ternário para 
determinar se um ano é bissexto. A variável ano contém o ano a ser verificado. 
Atribua o resultado à variável resultado. 
 */
Resposta
let ano = 2024; 
let estado = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0 ? "Bissexto" : "Não bissexto";

console.log(estado); 
/* 
Questão 10: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa pode entrar em um clube. A variável idade contém 
a idade da pessoa e a variável temConvite indica se ela possui um convite. 
Atribua o resultado à variável status. 
 */
Resposta
let idade = 25; 
let temConvite = true; 
let estado = (idade >= 18 && temConvite) ? "Pode entrar" : "Não pode entrar";

console.log(estado);

/*

Questão 13: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é elegível para a aposentadoria. A variável idade 
contém a idade da pessoa e a variável sexo indica o sexo ( 'masculino' ou 
'feminino'). Atribua o resultado à variável elegivel. 
*/
Resposta
let idade = 65; 
let sexo = 'masculino'; 
let idadeMinimaHomem = 65; 
let idadeMinimaMulher = 62; 

let elegivel = (sexo === 'masculino' && idade >= idadeMinimaHomem) || 
               (sexo === 'feminino' && idade >= idadeMinimaMulher) ? 
               "Elegível para aposentadoria" : 
               "Não elegível para aposentadoria";

console.log(elegivel); 
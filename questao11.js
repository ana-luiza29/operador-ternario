/*
Questão 11: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é um bebê, criança, adolescente, adulto ou idoso. A 
variável idade contém a idade da pessoa. Atribua o resultado à variável 
categoria. 
 
*/
Resposta
let idade = 35; 
let  categoria = idade < 2 ? "Bebê" : 
                 idade < 12 ? "Criança" : 
                 idade < 18 ? "Adolescente" : 
                 idade < 60 ? "Adulto" : "Idoso";

console.log(categoria); 

// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
// 1- Preço do Combustível;
// 2- Gasto médio de combustível do carro por KM;
// 3- Distância em KM da viagem;

// Imprima no console o valor que será gasto de combustível para realizar esta viagem.

let valor_combustivel = 5.89;
let litro_por_km = 12;
let distancia_da_viagem = 180;

let quantidade_combustivel = distancia_da_viagem / litro_por_km;
let valor_gasto = valor_combustivel * quantidade_combustivel;

console.log('O valor gasto será', valor_gasto.toFixed(2));
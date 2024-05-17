// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
// 1- Preço do etanol;
// 2- Preço da gasolina;
// 3- O tipo de combustível que está no seu carro;
// 4- Gasto médio de combustível do carro por KM;
// 5- Distancia em KM da viagem;

// Imprima no console o valor que será gasto para realizar essa viagem.

const precoEtanol = 5.79;
const precoGasolina = 6.66;
let meuCombustivel = "Gasolina";
let gastoKmGasolina = 11;
let gastoKmEtanol = 6;
let distancia = 100;

if (meuCombustivel === "Gasolina") {
    let quantidadeGasolina = distancia / gastoKmGasolina;
    let valorGasolina = quantidadeGasolina * precoGasolina;
    console.log("O gasto para a viagem usando gasolina é de", valorGasolina.toFixed(2));
} else {
    let quantidadeEtanol = distancia / gastoKmEtanol;
    let valorEtanol = quantidadeEtanol * precoEtanol;
    console.log("O gasto para a viagem usando Etanol é de", valorEtanol.toFixed(2));
    
}
const numero = 0;

const isnumeroPar = (numero % 2) === 0;

// = é atribuição
// == ignora o tipo da variável
// === o mais utilizado leva o tipo em consideração

console.log(isnumeroPar);

if (numero===0) {
    console.log("O número é inválido");
} else if (isnumeroPar) {
    let soma = numero + numero;
    console.log('O número é par e o dobro de', numero, 'é', soma);
} else{
    console.log("O número é ímpar");
}


// if (!isnumeroPar) {
//     console.log('O número é impar')
// }

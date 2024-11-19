alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10:');

if (chute == numeroSecreto) {
    alert('Você acertou o número! Que é '+numeroSecreto);
} else {
    alert('Voce errou o número!');
}
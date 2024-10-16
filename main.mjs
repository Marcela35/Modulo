import { somar } from './somar.mjs';
import { multiplicar } from '/multiplicar.mjs';
import { dividir } from './dividir.mjs';
import { subtracao } from './subtracao.mjs';
import { potencia } from './potencia.mjs';

const numero1 = 5;
const numero2 = 3;

const resultadoSoma = somar(numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1, numero2);
const resultadoDivir = dividir(numero1, numero2);
const resultadoSubtracao = subtracao(numero1, numero2);
const resultadoPotencia = potencia(numero1, numero2);

console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} * ${numero2} = ${resultadoMultiplicacao}`);
console.log(`${numero1} / ${numero2} = ${resultadoDivir}`);
console.log(`${numero1} - ${numero2} = ${resultadoSubtracao}`);
console.log(`${numero1} ** ${numero2} = ${resultadoPotencia}`);
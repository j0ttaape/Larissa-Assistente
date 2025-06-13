import prompt from 'prompt-sync'
import { ApresentarLarissa, esperar, ApresentarContasMatematicas, Pedindoaconta } from "./funcoes.js";


console.log(ApresentarLarissa());

await esperar(1000);

console.log(ApresentarContasMatematicas());

await esperar(1000);

Pedindoaconta();

await esperar(1000);
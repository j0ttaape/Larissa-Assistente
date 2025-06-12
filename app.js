import prompt from 'prompt-sync'
import { ApresentarLarissa, esperar, ApresentarContasMatematicas } from "./funcoes.js";


console.log(ApresentarLarissa());

await esperar(3000);

console.log(ApresentarContasMatematicas());


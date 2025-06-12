import prompt from 'prompt-sync';
let ler = prompt();

// Apresentação da assistente
export function ApresentarLarissa() {
    return `--------------------------------------------------------------------------
👩‍🏫 Olá! Me chamo Larissa, é um prazer te conhecer.
Com o que iremos trabalhar hoje?
--------------------------------------------------------------------------`;
}

// Mostrar as contas disponíveis
export function ApresentarContasMatematicas() {
    return `--------------------------------------------------------------------------
📚 Contas Matemáticas que eu posso resolver:

➕ Adição.............. 
➖ Subtração........... 
✖️ Multiplicação....... 
➗ Divisão..............
🧮 Parênteses.......... 
📐 Potenciação......... 
√ Raiz quadrada........ 
% Porcentagem.......... 

Digite sua conta e eu resolvo rapidinho! 😄
--------------------------------------------------------------------------`;
}

// Esperar X milissegundos
export function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Pedindo a conta
export function Pedindoaconta(){
    

}
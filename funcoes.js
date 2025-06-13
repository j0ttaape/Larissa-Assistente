import prompt from 'prompt-sync';
let ler = prompt();

// Apresentação da assistente
export function ApresentarLarissa() {
    return `--------------------------------------------------------------------------
👩‍🏫 Olá! Me chamo Larissa, é um prazer te conhecer.
--------------------------------------------------------------------------`;
}

// Mostrar as contas disponíveis
export function ApresentarContasMatematicas() {
    return `--------------------------------------------------------------------------
📚 Contas Matemáticas que eu posso resolver:

➕ Adição.............. 1
➖ Subtração........... 2
✖️ Multiplicação....... 3
➗ Divisão............. 4
📐 Potenciação........  5
√ Raiz quadrada........ 6
% Porcentagem.......... 7
❌ Sair............... 8

Digite sua conta e eu resolvo rapidinho! 😄
--------------------------------------------------------------------------\n\n`;
}

// Esperar X milissegundos
export function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



// ideia de criar um while/for para repetir o primeiro console log em diante !!!!!!


//Funcao de calculos e pedida de dados para o usuario (em base as opcoes)
export function Pedindoaconta(){
    let opcoes = 0;
    while(opcoes!= 8){
    console.log(`\n\n\n--------------------------------------------------------------------------
👩‍🏫 Qual cálculo iremos resolver? (por exemplo: 1 = Adição)\n
❌ Sair............... 8
--------------------------------------------------------------------------`);
     opcoes = ler();

    //adicao
    if(opcoes == 1){
        console.log(`--------------------------------------------------------------------------
            Daora! iremos somar quais números?
--------------------------------------------------------------------------`);
        
        console.log(`\nMe informe o primeiro valor:`)
        let valor1 = Number(ler());
        esperar(2)
        console.log(`\nMe informe o segundo valor:`)
        let valor2 = Number(ler());

        console.log(`A soma de ${valor1} e ${valor2} é igual a: ${valor1+valor2}`)
    }

    //subtração
    if(opcoes == 2){
        console.log(`--------------------------------------------------------------------------
            Daora! iremos subtrair quais números?
--------------------------------------------------------------------------`);
        
        console.log(`\nMe informe o primeiro valor:`)
        let valor1 = Number(ler());
        esperar(2)
        console.log(`\nMe informe o segundo valor:`)
        let valor2 = Number(ler());

        console.log(`A subtração de ${valor1} e ${valor2} é igual a: ${valor1-valor2}`)
    }

    //multiplicacao
    if(opcoes == 3){
        console.log(`--------------------------------------------------------------------------
            Daora! iremos multiplicar quais números?
--------------------------------------------------------------------------`);
        
        console.log(`\nMe informe o primeiro valor:`)
        let valor1 = Number(ler());
        esperar(2)
        console.log(`\nMe informe o segundo valor:`)
        let valor2 = Number(ler());

        console.log(`A multiplicação de ${valor1} e ${valor2} é igual a: ${valor1*valor2}`)
    }

    //Divisão
    if(opcoes == 4){
        console.log(`--------------------------------------------------------------------------
            Daora! iremos dividir quais números?
--------------------------------------------------------------------------`);
        
        console.log(`\nMe informe o primeiro valor:`)
        let valor1 = Number(ler());
        esperar(2)
        console.log(`\nMe informe o segundo valor:`)
        let valor2 = Number(ler());

        console.log(`A divisão de ${valor1} e ${valor2} é igual a: ${valor1/valor2}`)
    }

    //Potencia
    if(opcoes == 5){
        console.log(`--------------------------------------------------------------------------
            Daora! Quais vão ser os números?
--------------------------------------------------------------------------`);
        
        console.log(`\nMe informe o primeiro valor:`)
        let valor1 = Number(ler());
        esperar(2)
        console.log(`\nMe informe o segundo valor:`)
        let valor2 = Number(ler());

        console.log(`O número ${valor1} elevado a ${valor2} é igual a: ${valor1**valor2}`)
    }

    //Raiz Quadrada
    if(opcoes == 6){
        console.log(`--------------------------------------------------------------------------
            Daora! iremos dividir quais números?
--------------------------------------------------------------------------`);
        
        console.log(`\nMe informe o valor para realizar o cálculo:`)
        let valor1 = Number(ler());

        console.log(`A raíz quadrada do número ${valor1} é: ${Math.sqrt(valor1)}`);
    }

    //Porcentagem
    if(opcoes == 7){
        console.log(`--------------------------------------------------------------------------
            Daora! Qual a porcentagem do número que iremos descobrir?
--------------------------------------------------------------------------`);
        
        console.log(`\nMe informe o valor original cálculo:`)
        let valor1 = Number(ler());
        
        console.log(`\nMe o desconto/porcentagem:`)
        let valor2 = Number(ler());

        console.log(`A porcentagem é igual a: ${(valor1*valor2)/100}`);
    }



}
}
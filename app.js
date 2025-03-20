// let titulo = document.getElementById('texto').innerHTML = 'Aoba!';
// let titulo = document.getElementsByTagName('h1')[0].innerHTML = 'Aoba!';
// let titulo = document.querySelector('h1').innerHTML = 'Epa!';
// document.querySelector('h1').innerHTML = 'Jogo do número secreto' NÃO GUARDANDO EM UMA VARIÁVEL TAMBÉM FUNCIONOU...

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('.texto__paragrafo');     //NOTA: também funciona com classes, como feito aqui, pois segundo o w3schools esse método pega o PRIMEIRO ELEMENTO com o nome referenciado que existir dentro de um css(?), pelo que eu entendi... (NÃO ESQUECER DE REFERENCIAR AS CLASSES COM SEU DEVIDO PONTO)
// paragrafo.innerHTML = 'Escolha um número entre 1 e 100';


function exibirTextoNaTela(tag, texto) {
    let conteudo = document.querySelector(tag);
    conteudo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 100');
}
exibirMensagemInicial();

let listaNumerosSorteados = [];
let numeroLimite = 100;

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let tamanhoLista = listaNumerosSorteados.length;
    if (tamanhoLista == numeroLimite) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
// let aleatorio = parseInt(Math.random() * 100 + 1);



let tentativas = 1;
function verificarChute() { 
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto, que era ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        //***NOTA: Na aula, foi dito que talvez o HTML não pudesse ler TEMPLATE STRING, então criou-se uma variável para guardar a mensagem e usar no parâmetro da FUNÇÃO de mensagem (***PORÉM, TESTANDO AQUI A TEMPLATE STRING, COMO FEITO ABAIXO NO ELSE, FUNCIONOU NORMALMENTE NA FUNÇÃO!!!!!)
        document.getElementById('reiniciar').removeAttribute('disabled');
        //NOTA: Para **ADICIONAR** um atributo a um elemento, usa-se .setAttribute. **PORÉM PEDE-SE *DOIS PARAMETROS*, ATRIBUTO E VALOR (O valor pode ser vazio se o atributo em questão não tiver um valor).
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `Tente um número menor do que ${chute}.`)
        } else {
            exibirTextoNaTela('p', `Tente um número maior do que ${chute}.`)
        }
        limparCampo();
        // OU TAMBÉM FAZER DA FORMA COM OPERADOR TERNÁRIO ABAIXO (Com uma sintaxe e indentação melhoradas):

        // chute > numeroSecreto
        //     ? exibirTextoNaTela('p', `Tente um número menor do que ${chute}.`)
        //     : exibirTextoNaTela('p', `Tente um número maior do que ${chute}.`)
        // ;
    }
    tentativas++;
}

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
};

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    exibirMensagemInicial();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true); //true no segundo parametro
}










// Essa é a ***ARROW FUNCTION***, USADA PARA MELHOR LEGIBILIDADE QUANDO SE TEM APENAS **UM** RETORNO, TORNANDO A ESCRITA E A LEITURA MAIS SIMPLES
let gerarNumeroAleatorio2 = () => parseInt(Math.random() * 10 + 1);









// ABAIXO SÃO EXEMPLOS DE EXERCÍCIOS FEITOS USANDO OPERADOR TERNÁRIO E DIFERENTES FORMAS DE INDENTAÇÃO
// Nota: todas usam a variavel idadeUsuario, descomentar para usar.

// const idadeUsuario = 65;

// let idadeMsg = idadeUsuario <= 19 ? console.log('Jovem') : console.log('Adulto');

// let idadeMsg = idadeUsuario <= 19
//     ? console.log('Jovem')
//     : idadeUsuario <= 60
//         ? console.log('Adulto')
//         : console.log('Idoso')
// ;

// let idadeMsg = 
//     idadeUsuario <= 19
//         ? console.log('Jovem')
//         : console.log('Adulto')
// ;


// let idadeMsg = 
//     idadeUsuario <= 19
//         ? console.log('Jovem')
//         : idadeUsuario <= 60
//             ? console.log('Adulto')
//             : console.log('Idoso')
// ;



// ************* UMA DAS FORMAS MAIS INTERESSANTES DE ESCREVER ATÉ AGORA:


// const idadeUsuario = 50;

// idadeUsuario <= 12
//     ? console.log('Criança')
//     : idadeUsuario <= 17
//     ? console.log('Adolescente')
//     : idadeUsuario <= 60
//     ? console.log('Adulto')
//     : console.log('Idoso');





// teste
// teste
// teste
// teste
// teste
// teste
// teste
// teste
// teste

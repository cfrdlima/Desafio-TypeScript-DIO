/* O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */

const botaoAtualizar = document.getElementById("atualizar-saldo") as HTMLButtonElement;
const botaoLimpar = document.getElementById("limpar-saldo") as HTMLButtonElement;
const campoSaldo = document.getElementById("campo-saldo") as HTMLSpanElement;
const campoSoma = document.getElementById("soma") as HTMLInputElement;

campoSaldo.innerHTML = "0";

function somarAoSaldo(soma: string) {
  const valorSoma = parseFloat(soma);
  campoSaldo.innerHTML = (parseFloat(campoSaldo.innerHTML) + valorSoma).toString();
}

function limparSaldo() {
  campoSaldo.innerHTML = "0";
}

botaoAtualizar.addEventListener("click", function () {
  somarAoSaldo(campoSoma.value);
});

botaoLimpar.addEventListener("click", function () {
  limparSaldo();
});

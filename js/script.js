const hoje = new Date().toISOString().split('T')[0];
document.getElementById("data").max = hoje;

function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}

const verificarMaioridade = (event) => {
    event.preventDefault(); 

    const dataNascimento = document.getElementById("data").value;
    const idade = calcularIdade(dataNascimento);
    const resultado = document.getElementById("resultado");

    if (idade >= 18) {
        resultado.value = `Você tem ${idade} anos. Você é maior de idade.`;
    } else {
        resultado.value = `Você tem ${idade} anos. Você é menor de idade.`;
    }
};

const formIdade = document.getElementById("form-idade");

if (formIdade) {
    formIdade.addEventListener("submit", verificarMaioridade);
}

function trocaValor() {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");

    const valor1 = input2.value;
    const valor2 = input1.value;

    input1.value = valor1;
    input2.value = valor2;

    document.getElementById("resultado-troca1").value = `Valor 1 = ${valor2}`;
    document.getElementById("resultado-troca2").value = `Valor 2 = ${valor1}`;
}

const formTroca = document.getElementById("form-troca");

if (formTroca) {
    formTroca.addEventListener("submit", (event) => {
        event.preventDefault();
        trocaValor();
    });
}

function calcularAreaTriangulo(){
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const area = (base*altura)/2;
    document.getElementById("resultado-triangulo").value = `A área do triângulo é: ${area.toFixed(2)} cm²`;
}

const formTriangulo = document.getElementById("form-triangulo");

if (formTriangulo) {
    formTriangulo.addEventListener("submit", (event) => {
        event.preventDefault();
        calcularAreaTriangulo();
    });
}

function idadeMesesDias() {
    const idadeAnos = parseInt(document.getElementById("idade-anos").value, 10);

    if (isNaN(idadeAnos) || idadeAnos < 0) {
        document.getElementById("resultado-idade-meses").value = "Digite uma idade válida.";
        document.getElementById("resultado-idade-dias").value = "";
        return;
    }

    const meses = idadeAnos * 12;
    const dias = Math.floor(idadeAnos * 365.25);

    document.getElementById("resultado-idade-meses").value = meses;
    document.getElementById("resultado-idade-dias").value = dias;
}

const formIdadeMesesDias = document.getElementById("form-idade-meses-dias");

if (formIdadeMesesDias) {
    formIdadeMesesDias.addEventListener("submit", (event) => {
        event.preventDefault();
        idadeMesesDias();
    });
}

function descontoProduto() {
    const precoOriginal = parseFloat(document.getElementById("preco-original").value);
    const percentualDesconto = 0.10; // 10% de desconto

    if (isNaN(precoOriginal) || precoOriginal <= 0) {
        document.getElementById("resultado-desconto").value = "Digite um preço válido.";
        return;
    } else if (precoOriginal > 100) {
        let valorDesconto = precoOriginal * percentualDesconto;
        let precoComDesconto = precoOriginal - valorDesconto;
        document.getElementById("resultado-desconto").value = precoComDesconto.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
        });s
    } else {
        document.getElementById("resultado-desconto").value = precoComDesconto.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
        });
    }
}

const formDesconto = document.getElementById("form-desconto");

if (formDesconto) {
    formDesconto.addEventListener("submit", (event) => {
        event.preventDefault();
        descontoProduto();
    });
}

function verificadorAnoBissexto() {
    const ano = parseInt(document.getElementById("ano").value, 10);
    const resultado = document.getElementById("resultado-ano-bissexto");

    if (isNaN(ano)) {
        resultado.value = "Digite um ano válido.";
        return;
    }

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        resultado.value = `${ano} é um ano bissexto.`;
    } else {
        resultado.value = `${ano} não é um ano bissexto.`;
    }
}

const formAnoBissexto = document.getElementById("form-ano-bissexto");

if (formAnoBissexto) {
    formAnoBissexto.addEventListener("submit", (event) => {
        event.preventDefault();
        verificadorAnoBissexto();
    });
}
function adicionar(valor){
    const display = document.getElementById("display");
    display.value += valor;
}

function limpar(){
    const display = document.getElementById("display");
    display.value = "";
}

function calcular(){
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
    }
}

function verificarParImpar() {
    const numero = parseInt(document.getElementById("numero").value, 10);
    const resultado = document.getElementById("resultado-par-impar");
    if (isNaN(numero)) {
        resultado.value = "Digite um número válido.";
        return;
    }
    if (numero % 2 === 0) {
        resultado.value = `${numero} é um número par.`;
    } else {
        resultado.value = `${numero} é um número ímpar.`;
    }   
}

const formParImpar = document.getElementById("form-par-impar");
if (formParImpar) {
    formParImpar.addEventListener("submit", (event) => {
        event.preventDefault();
        verificarParImpar();
    });
}
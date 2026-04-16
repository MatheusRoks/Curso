const hoje = new Date().toISOString().split('T')[0];
document.getElementById("data").max = hoje;

/* ===================== IDADE ===================== */

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

/* ===================== TROCA ===================== */

function trocaValor() {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");

    const valor1 = input2.value;
    const valor2 = input1.value;



    document.getElementById("resultado-troca1").value = `Valor 1 = ${valor1}`;
    document.getElementById("resultado-troca2").value = `Valor 2 = ${valor2}`;
}

const formTroca = document.getElementById("form-troca");

if (formTroca) {
    formTroca.addEventListener("submit", (event) => {
        event.preventDefault();
        trocaValor();
    });
}

/* ===================== TRIÂNGULO ===================== */

function calcularAreaTriangulo() {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const area = (base * altura) / 2;

    document.getElementById("resultado-triangulo").value =
        `A área do triângulo é: ${area.toFixed(2)} cm²`;
}

const formTriangulo = document.getElementById("form-triangulo");

if (formTriangulo) {
    formTriangulo.addEventListener("submit", (event) => {
        event.preventDefault();
        calcularAreaTriangulo();
    });
}

/* ===================== IDADE MESES ===================== */

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

/* ===================== DESCONTO ===================== */

function descontoProduto() {
    const precoOriginal = parseFloat(document.getElementById("preco-original").value);
    const percentualDesconto = 0.10;

    const campoDesconto = document.getElementById("valor-desconto");
    const campoFinal = document.getElementById("resultado-desconto");

    if (isNaN(precoOriginal) || precoOriginal <= 0) {
        campoFinal.value = "Digite um preço válido.";
        campoDesconto.value = "";
        return;
    }

    let valorDesconto = 0;
    let precoFinal = precoOriginal;

    if (precoOriginal > 100) {
        valorDesconto = precoOriginal * percentualDesconto;
        precoFinal = precoOriginal - valorDesconto;
    }

    campoDesconto.value = valorDesconto.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    campoFinal.value = precoFinal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

const formDesconto = document.getElementById("form-desconto");

if (formDesconto) {
    formDesconto.addEventListener("submit", (event) => {
        event.preventDefault();
        descontoProduto();
    });
}

/* ===================== ANO BISSEXTO ===================== */

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

/* ===================== CALCULADORA ===================== */

function adicionar(valor) {
    document.getElementById("display").value += valor;
}

function limpar() {
    document.getElementById("display").value = "";
}

function calcular() {
    const display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
}

/* ===================== PAR OU ÍMPAR ===================== */

function verificarParImpar() {
    const numero = parseInt(document.getElementById("numeropi").value, 10);
    const resultado = document.getElementById("resultado-par-impar");

    if (isNaN(numero)) {
        resultado.value = "Digite um número válido.";
        return;
    }

    resultado.value =
        numero % 2 === 0
            ? `${numero} é um número par.`
            : `${numero} é um número ímpar.`;
}

const formParImpar = document.getElementById("form-par-impar");

if (formParImpar) {
    formParImpar.addEventListener("submit", (event) => {
        event.preventDefault();
        verificarParImpar();
    });
}

/* ===================== TEMPERATURA ===================== */

function ConverterTemperatura() {
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const unidade = document.getElementById("unidade").value;

    const resultadoFahrenheit = document.getElementById("fahrenheit-resultado");
    const resultadoKelvin = document.getElementById("kelvin-resultado");
    const resultadoCelsius = document.getElementById("celsius-resultado");

    if (isNaN(temperatura)) {
        alert("Digite uma temperatura válida");
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unidade === "celsius") {
        celsius = temperatura;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;
    } else if (unidade === "fahrenheit") {
        fahrenheit = temperatura;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    } else {
        kelvin = temperatura;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    resultadoFahrenheit.value = `${fahrenheit.toFixed(2)} °F`;
    resultadoKelvin.value = `${kelvin.toFixed(2)} K`;
    resultadoCelsius.value = `${celsius.toFixed(2)} °C`;
}

if (document.getElementById("form-temperatura")) {
    document.getElementById("form-temperatura")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            ConverterTemperatura();
        });
}

/* ===================== NÚMEROS ===================== */

function tipoNumero(n) {
    if (n > 0) return "positivo";
    if (n < 0) return "negativo";
    return "zero";
}

function maiorMenor() {
    const n1 = parseFloat(document.getElementById("pnnumero1").value);
    const n2 = parseFloat(document.getElementById("pnnumero2").value);
    const n3 = parseFloat(document.getElementById("pnnumero3").value);

    const resultado = document.getElementById("pnresultado-maior");

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultado.value = "Digite números válidos.";
        return;
    }

    resultado.value = `Maior: ${Math.max(n1, n2, n3)} | Menor: ${Math.min(n1, n2, n3)}`;
}

if (document.getElementById("form-numero")) {
    document.getElementById("form-numero")
        .addEventListener("submit", function (e) {
            e.preventDefault();

            const n1 = parseFloat(document.getElementById("pnnumero1").value);
            const n2 = parseFloat(document.getElementById("pnnumero2").value);
            const n3 = parseFloat(document.getElementById("pnnumero3").value);

            const resultado = document.getElementById("pnresultado-numeros");

            if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
                resultado.value = "Digite números válidos.";
                return;
            }

            maiorMenor();

            resultado.value =
                `Número 1 é ${tipoNumero(n1)}\n` +
                `Número 2 é ${tipoNumero(n2)}\n` +
                `Número 3 é ${tipoNumero(n3)}`;
        });
}

/* ===================== IMC ===================== */

function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura-imc").value);
    const resultado = document.getElementById("resultado-imc");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.value = "Digite um peso e altura válidos.";
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao =
        imc < 18.5 ? "Abaixo do peso" :
        imc < 25 ? "Peso normal" :
        imc < 30 ? "Sobrepeso" : "Obesidade";

    resultado.value = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}

if (document.getElementById("form-imc")) {
    document.getElementById("form-imc")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            calcularIMC();
        });
}

/* ===================== MÉDIA ===================== */

function calcularMedia() {
    const n1 = parseFloat(document.getElementById("nota1").value);
    const n2 = parseFloat(document.getElementById("nota2").value);
    const n3 = parseFloat(document.getElementById("nota3").value);

    const resultado = document.getElementById("resultado-medias");

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || n1 < 0 || n2 < 0 || n3 < 0) {
        resultado.value = "Digite notas válidas.";
        return;
    }

    resultado.value = `Média: ${((n1 + n2 + n3) / 3).toFixed(2)}`;
}

if (document.getElementById("form-medias")) {
    document.getElementById("form-medias")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            calcularMedia();
        });
}
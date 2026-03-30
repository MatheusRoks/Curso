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

    document.getElementById("resultado-idade-meses").value = `Sua idade em meses é: ${meses} meses.`;
    document.getElementById("resultado-idade-dias").value = `Sua idade em dias é: ${dias} dias.`;
}

const formIdadeMesesDias = document.getElementById("form-idade-meses-dias");

if (formIdadeMesesDias) {
    formIdadeMesesDias.addEventListener("submit", (event) => {
        event.preventDefault();
        idadeMesesDias();
    });
}
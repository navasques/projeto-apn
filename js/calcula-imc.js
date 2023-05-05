var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValdia = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso é inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValdia) {
        console.log("Altura inválida!");
        alturaEhValdia = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValdia && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }    
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }  return false;
}

function validaAltura(altura) {    
    if (altura >= 0 && altura < 3.00) {
        return true;
     } return false;
}

function calculaImc(peso, altura) {
    var imc = 0;    
    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}
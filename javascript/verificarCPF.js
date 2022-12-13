function verificadorCPF() {
    let cpf = document.getElementById("cpf").value;
    cpf=cpf.replace(/[^\d]+/g,'');
    var cpfInteiro = new Array(11);
    var indice = 0;
    var tamanhoCPF = 11;
    var primeiroDigitoVerificador = 0;
    var vetorPrimeiroDigitoVerificador = new Array(10, 9, 8, 7, 6, 5, 4, 3, 2);
    var vetorSegundoDigitoVerificador = new Array(11, 10, 9, 8, 7, 6, 5, 4, 3, 2);
    var segundoDigitoVerificador = 0;
    cpf.replace('d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}', '')
    if (cpf.length != tamanhoCPF) {
        console.log("Um CPF é composto de 11 números")
        return false;
    }
    if (cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999") {
        console.log("Não existe CPF com um único dígito repetido 11x");
        return false;
    }
    for (indice = 0; indice < tamanhoCPF; indice++) {
        if (!isNaN(cpf[indice])) {
            cpfInteiro[indice] = parseInt(cpf[indice]);
        }
        else {
            console.log("Caractere Inválido")
            return false
        }
    }
    for (indice = 0; indice < tamanhoCPF - 2; indice++) {
        primeiroDigitoVerificador += cpfInteiro[indice] * vetorPrimeiroDigitoVerificador[indice];
    }
    primeiroDigitoVerificador = primeiroDigitoVerificador % 11;
    if (primeiroDigitoVerificador < 2) {
        primeiroDigitoVerificador = 0;
    }
    else {
        primeiroDigitoVerificador = tamanhoCPF - primeiroDigitoVerificador;
    }
    if (cpfInteiro[9] != primeiroDigitoVerificador) {
        console.log("Primeiro Dígito Verificador Errado")
        return false
    }
    for (indice = 0; indice < tamanhoCPF - 1; indice++) {
        segundoDigitoVerificador += cpfInteiro[indice] * vetorSegundoDigitoVerificador[indice];
    }
    segundoDigitoVerificador = segundoDigitoVerificador % 11
    if (segundoDigitoVerificador < 2) {
        segundoDigitoVerificador = 0;
    }
    else {
        segundoDigitoVerificador = tamanhoCPF - segundoDigitoVerificador;
    }
    if (cpfInteiro[10] != segundoDigitoVerificador) {
        console.log("Segundo Dígito Verificador Errado")
        return false;
    }
    console.log("CPF Válido")
    return true;
}
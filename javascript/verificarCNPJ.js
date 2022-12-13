function verificadorCNPJ(){
    let cnpj =  document.getElementById("cnpj").value;
    cnpj = cnpj.replace(/[^\d]+/g,'');
    var indice;
    var soma;
    var tamanho;
    var numeros;
    var digitos;
    var pos;
    var resultado;
    cnpj.replace('d{2}[.-/]?\d{3}[.-/]?\d{3}[.-/]?\d{4}[.-/]?\d{2}', '')
    if(cnpj == ''){
        console.log("Digite um CNPJ"); 
        return false;
    }
    if (cnpj.length != 14){
        console.log("Tamanho Invalido");
        return false;
    }
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999"){
            console.log("CNPJ Inválido");
            return false;
    }
    // Valida DVs
    tamanho = cnpj.length - 2;
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (indice = tamanho; indice >= 1; indice--) {
        soma += numeros.charAt(tamanho - indice) * pos--;
        if (pos < 2)
           pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)){
        console.log("CNPJ Inválido");
        return false;
    }
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (indice = tamanho; indice >= 1; indice--) {
        soma += numeros.charAt(tamanho - indice) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)){
        console.log("CNPJ Inválido");
        return false;
    }
    console.log("CNPJ Válido");
    return true;
}
    
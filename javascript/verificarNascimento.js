function verificadorNascimento() {
    dataAtual = new Date();
    var data = document.getElementById("dataNascimento").value;
    data = new Date(data);
    if (data < dataAtual) {
        console.log("Data Válida");
        return true;
    } else {
        console.log("Data Inválida");
        return false;
    }
}


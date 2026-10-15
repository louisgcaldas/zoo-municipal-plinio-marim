console.log("JavaScript do Zoológico funcionando");

function mostrarInfo(animal) {
    let idElemento = "info-" + animal
    let blocoInfo = document.getElementById(idElemento)
    let botao = document.getElementById('botao-' + animal)

    if (blocoInfo.hidden === true) {
        blocoInfo.hidden = false;
        botao.textContent = "Ocultar Informações"
    } else {
        blocoInfo.hidden = true;
        botao.textContent = "Ver Informações"
    }
}


console.log("JavaScript da Inscrição funcionando");

const botaoValidar = document.getElementById("botaoValidar");
const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const idade = document.getElementById("idade");
const termos = document.getElementById("termos");
const mensagem = document.getElementById("mensagem");
const botaoEnviar = document.getElementById("botaoEnviar")

botaoValidar.addEventListener("click", function () {
    if (nome.value === "") {
        mensagem.hidden = false
        mensagem.textContent = "Erro: Por favor, preencha o seu nome antes de continuar!";
        mensagem.style.backgroundColor = "#f8d7da";
        mensagem.style.color = "#721c24";
        mensagem.style.border = "1px solid #f5c6cb";
        return;
    }

    if (cpf.value === "") {
        mensagem.hidden = false
        mensagem.textContent = "Erro: Por favor, preencha o seu CPF antes de continuar!";
        mensagem.style.backgroundColor = "#f8d7da";
        mensagem.style.color = "#721c24";
        mensagem.style.border = "1px solid #f5c6cb";
        return;
    }

    if (idade.value === "") {
        mensagem.hidden = false
        mensagem.textContent = "Erro: Por favor, preencha a sua idade antes de continuar!";
        mensagem.style.backgroundColor = "#f8d7da";
        mensagem.style.color = "#721c24";
        mensagem.style.border = "1px solid #f5c6cb";
        return;
    }

    if (Number(idade.value) < 0) {
        mensagem.hidden = false
        mensagem.textContent = "Erro: Por favor, preencha com uma idade válida antes de continuar!";
        mensagem.style.backgroundColor = "#f8d7da";
        mensagem.style.color = "#721c24";
        mensagem.style.border = "1px solid #f5c6cb"
        return;
    }

    const whatsSelecionado = document.querySelector('input[name="whatsapp"]:checked');
    if (!whatsSelecionado) {
        mensagem.hidden = false
        mensagem.textContent = "Erro: Por favor, selecione se possui Whatsapp ou não!";
        mensagem.style.backgroundColor = "#f8d7da";
        mensagem.style.color = "#721c24";
        mensagem.style.border = "1px solid #f5c6cb";
        return;
    }

    const ingresSelecionado = document.querySelector('input[name="categoria"]:checked');
    if (!ingresSelecionado) {
        mensagem.hidden = false
        mensagem.textContent = "Erro: Por favor, selecione o tipo de ingresso!";
        mensagem.style.backgroundColor = "#f8d7da";
        mensagem.style.color = "#721c24";
        mensagem.style.border = "1px solid #f5c6cb";
        return;
    }

    else {
        mensagem.hidden = false;
        mensagem.style.backgroundColor = "#d4edda";
        mensagem.style.color = "#155724";
        mensagem.style.border = "1px solid #c3e6cb";
        mensagem.textContent = "Sucesso! Inscrição validada. Agora você pode enviar.";
        mensagem.style.color = "green";
    }


    botaoEnviar.classList.add("ativo");
    botaoEnviar.disabled = false;
})

botaoEnviar.addEventListener("click", function () {
    mensagem.textContent = "Sucesso! Inscrição enviada.";
})
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let senha = document.getElementById("senha").value;
    let confirmaSenha = document.getElementById("confirmaSenha").value;
    let mensagemErro = document.getElementById("mensagemErro");

    if (senha !== confirmaSenha) {
        mensagemErro.textContent = "As senhas não coincidem!";
    } else {
        mensagemErro.textContent = "";
        alert("Cadastro realizado com sucesso!");
        // Aqui você pode enviar os dados para o backend via fetch() ou outra API
    }
});
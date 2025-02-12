const form = document.querySelector('#formCadastro');
const senha = document.getElementById('senha');
const confSenha = document.getElementById('confsenha');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário
    
    // Coleta os dados do formulário
    const formData = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        matricula: document.getElementById('matricula').value,
        senha: document.getElementById('senha').value
    };

    // Enviar ao banco de dados

    // Verifica se as senhas são iguais
    if (formData.senha !== confSenha.value) {
        alert('As senhas não coincidem!');
        return;
    }

    // Redireciona para a página do chat
   // window.location.href = ;
});

confSenha.addEventListener('input', function() {
    if (senha.value !== confSenha.value) {
        confSenha.setCustomValidity('As senhas estão diferentes!');
    } else {
        confSenha.setCustomValidity('');
    }
});
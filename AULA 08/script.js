//const nome = localStorage.getItem('nome');

//alert(nome);

//localStorage.setItem("nome", "amor da minha vida");

//alert(localStorage.getItem("nome"));

//localStorage.removeItem("nome");
function login() {
    const local_usuario = localStorage.getItem("usuario");
    const local_senha = localStorage.getItem("senha");

    const campo_usuario = document.getElementById("usuario");
    const campo_senha = document.getElementById("senha");

    if (campo_usuario.value === local_usuario && campo_senha.value === local_senha) {
        alert("Login realizado com sucesso!");
    } else {
        alert("Usuário inválido ou senha inválida!");
    }
}

function cadastro() {
        // 1º Carregar os campos de cadastro
        // NOME, USUÁRIO, SENHA, PALAVRA-PASSE
        const nome = document.getElementById("nome").value;
        const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;
        const palavra_passe = document.getElementById("palavra_passe").value;

        // 2º Cadastrar os dados no localStorage
        // Ex.: localStorage.setItem("NOME", valor)
        // OBS.: "valor" é o dado que foi carregado no passo 1
        localStorage.setItem("nome", nome);
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("senha", senha);
        localStorage.setItem("palavra_passe", palavra_passe);

        // 3º Redirecionar para a tela de login
        window.location.href = "login.html"
}

function recuperar_senha() {

    const nome = document.getElementById("nome");
    const palavra_passe = document.getElementById("palavra_passe");

    const ls_nome = localStorage.getItem("nome");
    const ls_palavra_passe = localStorage.getItem("palavra_passe");


// 3º Comparar se os valores carregados nos campos da tela
// são compatíveis com os valores armazenados no localStorage.
//
// Se forem iguais, exibir a senha na tela ou em um alert.
//
// Se forem diferentes, notificar o usuário na tela ou em um alert
// informando que os dados não são compatíveis.
// Além disso, limpar os campos de entrada (inputs)



// DESAFIO SEM I.AAAAA:
//
// Vocês devem implementar um controle de tentativas para a recuperação de senha.
//
// REGRAS:
// Vocês devem validar a quantidade de tentativas incorretas
// de NOME e PALAVRA-PASSE.
//
// Quando o usuário errar 3 vezes, vocês devem bloquear os campos (inputs)
// e impedir que o usuário realize uma nova tentativa de recuperação de senha.
//
// Lembrem-se de salvar a quantidade de erros no localStorage.
}


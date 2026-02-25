const campoemail = document.getElementById("email"); // Obtém o elemento do campo de email pelo ID
const camposenha = document.getElementById("senha"); // Obtém o elemento do campo de senha pelo ID


const btnLogin = document.querySelector("#btnLogin"); // Obtém o elemento do botão de login pelo ID



async function loginUsuario() // Função
{
    console.log("Iniciando processo de login..."); // Exibe uma mensagem no console para indicar o início do processo de login
    var sandBoby = { // Cria um objeto com os dados do usuário para login
        email: campoemail.value, // Atribui o valor do campo de email ao objeto
        senha: camposenha.value //  Atribui o valor do campo de senha ao objeto
    };

    const url = "https://localhost:7039/Usuarios/login"; // URL do endpoint para autenticar o usuário

    const response = await fetch(url, { // Faz uma requisição POST para o endpoint de login
        method: "POST", // Define o método HTTP como POST
        headers: {
            "Content-Type": "application/json" // Define o tipo de conteúdo como JSON
    },
        body: JSON.stringify(sandBoby) //   Converte o objeto sandBoby para uma string JSON e a envia no corpo da requisição
});
if (response.ok) {
    console.log("Login bem-sucedido!"); // Exibe uma mensagem de sucesso no console se a resposta for bem-sucedida
    window.location.href = "Lista.html"; // Redireciona para a página de lista de usuários
} else {
    console.error("Erro ao fazer login:", response.statusText); // Exibe uma mensagem de erro no console se a resposta não for bem-sucedida, mostrando o status da resposta
}
}

btnLogin.addEventListener("click", loginUsuario);
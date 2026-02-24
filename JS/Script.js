
const camponome = document.getElementById("nome"); // Obtém o elemento do campo de nome pelo ID
const campoemail = document.getElementById("email"); // Obtém o elemento do campo de email pelo ID
const camposenha = document.getElementById("senha"); // Obtém o elemento do campo de senha pelo ID
const campocpf = document.getElementById("cpf"); // Obtém o elemento do campo de CPF pelo ID
const userList = document.getElementById("userList"); // Obtém o elemento da lista de usuários pelo ID


const btnCadastrar = document.querySelector("#btnCadastrar"); // Obtém o elemento do botão de cadastro pelo ID

async function cadastrarUsuario() // Função assíncrona para cadastrar um usuário
{
    var sandBoby = {  // Cria um objeto com os dados do usuário a ser cadastrado
        nome: camponome.value, // Atribui o valor do campo de nome ao objeto
        email: campoemail.value,  // Atribui o valor do campo de email ao objeto
        senha: camposenha.value,  // Atribui o valor do campo de senha ao objeto
        cpf: campocpf.value  // Atribui o valor do campo de CPF ao objeto
    };

    console.log(sandBoby); // Exibe o objeto no console para verificação


    const url = "https://localhost:7039/Usuarios/create"; // URL do endpoint para criar um novo usuário

    const response = await fetch(url, { // Faz uma requisição POST para o endpoint de criação de usuário
        method: "POST", // Define o método HTTP como POST
        headers: { 
            "Content-Type": "application/json" // Define o tipo de conteúdo como JSON
    },
        body: JSON.stringify(sandBoby)// Converte o objeto sandBoby para uma string JSON e a envia no corpo da requisição
});

if (response.ok) {
    console.log("Usuário cadastrado com sucesso!"); // Exibe uma mensagem de sucesso no console se a resposta for bem-sucedida
} else {
    console.error("Erro ao cadastrar usuário:", response.statusText); // Exibe uma mensagem de erro no console se a resposta não for bem-sucedida, mostrando o status da resposta
};
}

btnCadastrar.addEventListener("click", cadastrarUsuario);




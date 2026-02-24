
async function obterUsuarios() // Função para obter a lista de usuários
{
    const url = "https://localhost:7039/Usuarios/getAll"; // URL do endpoint para obter a lista de usuários 
    const response = await fetch(url); // Faz uma requisição GET para o endpoint de obtenção de usuários

    if (response.ok) {
        const usuarios = await response.json(); // Converte a resposta para JSON
        console.log("Lista de usuários:", usuarios); // Exibe a lista de usuários no console
    } else {
        console.error("Erro ao obter usuários:", response.statusText); // Exibe uma mensagem de erro no console se a resposta não for bem-sucedida, mostrando o status da resposta
    }
}

obterUsuarios(); // Chama a função para obter a lista de usuários quando o script é carregado
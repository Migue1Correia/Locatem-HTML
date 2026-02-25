
const btnLista = document.getElementById('btnLista');
const userList = document.getElementById('userList');

async function fetchUsuarios() {
    const url = "https://localhost:7039/Usuarios/getAll"; // URL do endpoint para obter a lista de usuários 
    try {
        const response = await fetch(url); // Faz uma requisição GET para o endpoint de obtenção de usuários
        if (response.ok) {
            const usuarios = await response.json(); // Converte a resposta para JSON
            userList.innerHTML = ''; // Limpa a lista de usuários antes de exibir os novos dados
            usuarios.forEach(usuario => { // Itera sobre cada usuário na lista de usuários
                const listItem = document.createElement('li'); // Cria um elemento de lista para cada usuário
                listItem.textContent = `ID: ${usuario.id}, 
                                        Nome: ${usuario.nome}, 
                                        Email: ${usuario.email}, 
                                        CPF: ${usuario.cpf}`; // Define o conteúdo do item da lista com as informações do usuário
                userList.appendChild(listItem); // Adiciona o item da lista à lista de usuários no HTML
            });
        } else {
            console.error("Erro ao obter usuários:", response.statusText); // Exibe uma mensagem de erro no console se a resposta não for bem-sucedida, mostrando o status da resposta
        }
    } catch (error) {
        console.error("Erro ao fazer a requisição:", error); // Exibe uma mensagem de erro no console se ocorrer um erro durante a requisição
    }
}

btnLista.addEventListener('click', fetchUsuarios); // Adiciona um evento de clique ao botão para chamar a função de obtenção de usuários quando clicado
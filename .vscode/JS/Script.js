
const camponome = document.getElementById("nome");
const campoemail = document.getElementById("email");
const camposenha = document.getElementById("senha");
const campoCPF = document.getElementById("CPF");


async function cadastrarUsuario() 
{
    var sandBoby = {
        nome: camponome.value,
        email: campoemail.value,
        senha: camposenha.value,
        CPF: campoCPF.value
    };


    const url = "https://localhost:7039/scalar/#tag/usuarios/POST/Usuarios/create";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
    },
        body: JSON.stringify(sandBoby)
});

if (response.ok) {
    console.log("Usuário cadastrado com sucesso!");
} else {
    console.error("Erro ao cadastrar usuário:", response.statusText);
};
}

btnCadastrar.addEventListener("click", cadastrarUsuario);
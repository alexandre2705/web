// Função para verificar se os campos do formulário estão preenchidos
function verificarFormulario() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        return false;
    } else {
        errorMessage.textContent = "";
        return true;
    }
}

// Manipulador de evento para o formulário
document.getElementById("loginForm").addEventListener("submit", function (e) {
    if (!verificarFormulario()) {
        e.preventDefault(); // Impede o envio do formulário se campos não estiverem preenchidos
    }
});

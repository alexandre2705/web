// Função para determinar a faixa etária com base na idade fornecida
function verificarFaixaEtaria(idade) {
    if (idade >= 3 && idade <= 10) {
        return "3 a 10 anos";
    } else if (idade >= 11 && idade <= 25) {
        return "11 a 25 anos";
    } else if (idade >= 36 && idade <= 55) {
        return "36 a 55 anos";
    } else if (idade >= 56 && idade <= 100) {
        return "56 a 100 anos";
    } else {
        return "Idade fora das faixas especificadas";
    }
}

// Manipulador de evento para o formulário
document.getElementById("ageForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const ageInput = document.getElementById("age");
    const result = document.getElementById("result");
    const idade = parseInt(ageInput.value);

    if (!isNaN(idade)) {
        const faixaEtaria = verificarFaixaEtaria(idade);
        result.textContent = `Faixa etária: ${faixaEtaria}`;
    } else {
        result.textContent = "Por favor, insira uma idade válida.";
    }
});

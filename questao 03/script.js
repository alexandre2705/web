function concatenarDados() {
    const name = document.getElementById("name").value;
    const maritalStatus = document.getElementById("maritalStatus").value;
    const ageGroup = document.getElementById("ageGroup").value;
    const result = document.getElementById("result");

    const concatenatedData = `Nome: ${name}, Estado Civil: ${maritalStatus}, Faixa Etária: ${ageGroup}`;
    result.textContent = concatenatedData;
}

document.getElementById("dataForm").addEventListener("submit", function (e) {
    e.preventDefault();
    concatenarDados();
});

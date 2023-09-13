function calcularIMC() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        result.textContent = "Por favor, insira valores válidos para peso e altura.";
    } else {
        const imc = weight / (height * height);
        let classification = "";

        if (imc < 16.9) {
            classification = "Muito abaixo do peso";
        } else if (imc >= 17 && imc < 18.4) {
            classification = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            classification = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            classification = "Acima do peso";
        } else {
            classification = "Obesidade";
        }

        result.textContent = `Seu IMC é ${imc.toFixed(2)} - ${classification}`;
    }
}
document.getElementById("imcForm").addEventListener("submit", function (e) {
    e.preventDefault();
    calcularIMC();
});

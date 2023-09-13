function verificarNumero() {
    var numero = parseInt(prompt("Digite um número inteiro:"));
 
if (numero > 0) {
      alert("O número é positivo.");
} else if (numero < 0) {
      alert("O número é negativo.");
} else {
      alert("O número é zero.");
    }
  }
  verificarNumero();
  
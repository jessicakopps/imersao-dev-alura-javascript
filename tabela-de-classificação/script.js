let numeroSecreto = parseInt(Math.random() * 21);

function Chutar() {
  let elementoResultado = document.getElementById("resultado");  
  let chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = `Você acertou! O número é ${numeroSecreto}!`;
  } else if (chute < 0 || chute > 20) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 20";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Errou, tente um número maior!";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Errou, tente um número menor!";
  }
}

function clearField(input) {
  input.value = "";
}

let numeroSecreto = parseInt(Math.random() * 21);
let tentativas = 5;
let botao = document.getElementById("chutar");

function Chutar() {
  let elementoResultado = document.getElementById("resultado");
  let chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = `Você acertou! O número é ${numeroSecreto}!`;
  } else if (chute < 0 || chute > 20) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 20";
  } else if (chute < numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML =
      "Errou, tente um número maior! Ainda restam " +
      tentativas +
      " tentativas";
  } else if (chute > numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML =
      "Errou, tente um número menor! Ainda restam " +
      tentativas +
      " tentativas";
  }

  if (tentativas == 0) {
    botao.disabled = true;

    resultado.innerHTML =
      "Acabou as tentativas! O número secreto era " + numeroSecreto + "!";
  }
}

function reload() {
  botao.disabled = false;
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Tente adivinhar o número!";
  tentativas = 5;
}

function clearField(input) {
  input.value = "";
}
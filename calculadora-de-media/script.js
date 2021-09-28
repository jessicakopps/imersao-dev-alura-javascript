let notas = [];

function somaNotas() {
  let strNumber = document.getElementById("notaDigitada").value;

  if(strNumber === ""){
    return;
  }    
  let number = Number(strNumber).toFixed(1);

  notas.push(number);
  document.getElementById("notasSoma").innerHTML = notas.join(" + ");

  let input = document.getElementById("notaDigitada");
  clearField(input);
}

function mediaNotas() {
  somaNotas();

  let notasNumber = notas.map(Number);
  let soma = notasNumber.reduce((total, value) => {
    return total + value;
  });

  let resultado = soma / notas.length;

  document.getElementById("notasMedia").innerHTML = resultado.toFixed(1) + "!";

  if (resultado >= 7){
    document.getElementById("aprovadoOuReprovado").innerHTML = 'Você foi aprovado!';
  } else {
    document.getElementById("aprovadoOuReprovado").innerHTML = 'Você foi reprovado :( ';
  }
}

function resetMedia() {
  notas = [];
  document.getElementById("notasSoma").innerHTML = "";
  document.getElementById("notasMedia").innerHTML = "";
  document.getElementById("aprovadoOuReprovado").innerHTML = "";
}

function clearField(input) {
  input.value = "";
}

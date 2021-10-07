// Declaração do array notas
let notas = [];

// ----------------------- FUNÇÕES ---------------------- //

// Botão +
function somaNotas() {
  let strNumber = document.getElementById("notaDigitada").value; // Valor capturado do HTML id entre ""
  
  if(strNumber === ""){
    return;    
  }  
    
  let number = Number(strNumber).toFixed(1);
  // Adicion o numero capturado no array
  notas.push(number);
  // Mostra na tela as notas capturadas com o "+"
  document.getElementById("notasSoma").innerHTML = notas.join(" + ");

  let input = document.getElementById("notaDigitada");
  clearField(input);
}

// Botão média
function mediaNotas() {
  somaNotas();
  // Mapea os numeros capturado, adicionados no array
  let notasNumber = notas.map(Number);
  // Faz a soma das nota no array
  let soma = notasNumber.reduce((total, value) => {    
    return total + value;
  });
  // Soma das notas divididos pela quantidade de notas no array
  let resultado = soma / notas.length;

  document.getElementById("notasMedia").innerHTML = resultado.toFixed(1) + "!"; // Mostra na tela o resultado
  
  // Testa para ver se aluno está ou não aprovado, média 7
  if (resultado >= 7){
    document.getElementById("aprovadoOuReprovado").innerHTML = 'Você foi aprovado!';
  } else {
    document.getElementById("aprovadoOuReprovado").innerHTML = 'Você foi reprovado :( ';
  }
}

// Botão reset - Limpa o array notas e os campos entre "" no HTML
function resetMedia() {
  notas = [];
  document.getElementById("notasSoma").innerHTML = "";
  document.getElementById("notasMedia").innerHTML = "";
  document.getElementById("aprovadoOuReprovado").innerHTML = "";
}

function clearField(input) {
  input.value = "";
}

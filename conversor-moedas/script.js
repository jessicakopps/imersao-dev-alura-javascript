function ConverterDolar() {
  var valorElemento = parseFloat(document.getElementById("valor").value);
  var valorEmReal = valorElemento * 5.25;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = `O valor de $${valor} em Real é R$${valorEmReal.toFixed(2)}`;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = parseFloat(document.getElementById("valor").value);
  var valorEmReal = valorElemento * 6.18;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = `O valor de €${valor} em Real é R$${valorEmReal.toFixed(2)}`;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterBitcoin() {
  var valorElemento = parseFloat(document.getElementById("valor").value);
  var valorEmReal = valorElemento * 252110.74;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = `O valor de ฿${valor} em Real é R$${valorEmReal.toFixed(2)}`;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function clearField(input) {
  input.value = "";
}

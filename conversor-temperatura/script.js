function ConverterFahrenheit() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmFahrenheitNumerico = parseFloat(valor);

  var valorEmCelsius = (valorEmFahrenheitNumerico - 32) / 1.8;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = `A temperatura de ${valor}ºC em Fahrenheit é ${valorEmCelsius.toFixed(1)}°F`;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterKelvin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmKelvinNumerico = parseFloat(valor);

  var valorEmCelsius = (valorEmKelvinNumerico - 273);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = `A temperatura de ${valor}ºC em Kelvin é ${valorEmCelsius.toFixed(1)}K`;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterRankine() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRankineNumerico = parseFloat(valor);

  var valorEmCelsius = (valorEmRankineNumerico + 273.15)  * 1.8 ;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = `A temperatura de ${valor}ºC em Rankine é ${valorEmCelsius.toFixed(1)}°R`;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function clearField(input) {
  input.value = "";
}

function converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmKmNumerico = parseFloat(valor);
  var valorEmKm = valorEmKmNumerico * 9461000000000;

  const formattedNumber = valorEmKm.toLocaleString("pt-BR");

  console.log(formattedNumber);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "A distância em quilômetros é " + formattedNumber;

  elementoValorConvertido.innerHTML = valorConvertido;
}
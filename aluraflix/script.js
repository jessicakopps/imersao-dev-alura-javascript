let filmes = [];

function adicionarFilme() {
  let filmeFavorito = document.getElementById("filme").value;

  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito); //O que mandar pra função
  } else {
    document.getElementById("erro").innerHTML =
      "Endereço inválido. Verifique se há o  .jpg no fim da URL";
  }
  document.getElementById("filme").value = ""; //Limpar o campo do input
}

function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

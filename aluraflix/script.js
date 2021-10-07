// Listas de título e imagens do catálogo
let listaTitulo = [
  "Howl's Moving Castle",
  "Nausicaä",
  "Princess Kaguyia",
  "Wisper of the Heart",

  "Tensei shitara Slime Datta Ken",
  "The Promise Neverland",
  "Saiki Kusuo no Psi-nan",

  "The Last of Us 2",
  "Ni no Kuni",
  "Skyrim",
  "Legend of Mana"
];
let listaPoster = [
  "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZTI3NmJmYTQtNDg4NS00M2VlLTgzZDAtZWIwZDcyOWY5YzIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNThmMWMyMWMtOWRiNy00MGY0LTg1OTUtNjYzODg2MjdlZGU5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "https://m.media-amazon.com/images/I/91k9zjN55iL._AC_SL1500_.jpg",

  "https://cdn.fstatic.com/media/movies/covers/2019/12/tWJRkoAMGTLLT8q8IIahJWpvb1n_Ov6ZjP6.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
  "https://i.pinimg.com/originals/0c/62/be/0c62bed532beedbb7b3562123a7a0b77.jpg",

  "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y02ljdBodKFBiziorYgqftLE.png",
  "https://s3.gaming-cdn.com/images/products/5498/orig/game-steam-ni-no-kuni-wrath-of-the-white-witch-remastered-cover.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/a/aa/The_Elder_Scrolls_5_Skyrim_capa.png",
  "https://static-cdn.jtvnw.net/ttv-boxart/Legend%20of%20Mana.jpg"
];

// ----------------------- FUNÇÕES ---------------------- //

// Botão adicionar
function adicionarFilme() {
  // Declaração de varíavel que pega os elementos do input no HTML, dos id infomados entre ""
  let tituloNovo = document.getElementById("tituloFilmeIncluir").value;
  let posterNovo = document.getElementById("posterFilmeIncluir").value;

  //Testa se a URL termina nos formatos abaixo, se não, não adiciona
  if (
    posterNovo.endsWith(".jpg") ||
    posterNovo.endsWith(".png") ||
    posterNovo.endsWith(".JPG") ||
    posterNovo.endsWith(".PNG") ||
    posterNovo.endsWith(".webp")
  ) { // Testa se já no catálogo o título adicionado
    if (listaTitulo.includes(tituloNovo)) {
      document.getElementById("erro").innerHTML = "Filme já adicionado.";
    } else {
      // Adiona na lista
      listaTitulo.push(tituloNovo);
      listaPoster.push(posterNovo);

      console.log(listaTitulo);
    }
  }
  //Limpa o campo do input
  document.getElementById("tituloFilmeIncluir").value = "";
  document.getElementById("posterFilmeIncluir").value = "";

  listarFilmesNaTela();
}

// Botão excluir 
// i = index array | 1 = numero d itens que será excluído
function excluirFilme(i) {
  let catalogo = listaTitulo.splice(i, 1);
  listaPoster.splice(i, 1);
  console.log(catalogo);
  
  listarFilmesNaTela();
}

// Mostra o Título e imagem do input na tela
//i = index array
function listarFilmesNaTela(catalogo) {
  var catalogo = "";
  for (var i in listaTitulo) {
    catalogo +=
      "<figure class='figura'><img src='" +
      listaPoster[i] +
      "'><br><figcaption>" +
      listaTitulo[i] +
      " " +
      "</figcaption><br> <button onclick=excluirFilme(" +
      i +
      ")>Excluir</button></figure>";
  }
  // Mostra na tela a var catalogo no id "" do HTML 
  let elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = catalogo;
}
listarFilmesNaTela();

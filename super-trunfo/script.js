// Declaração das cartas
cartas = [
  {
    Nome: "Heroína",
    Atributos: { HP: 66, Força: 50, Defesa: 50, Elemento: 50 },
    img: "./images/Heroine.png",
    moldura: "card.png"
  },
  {
    Nome: "Herói",
    Atributos: { HP: 66, Força: 50, Defesa: 50, Elemento: 50 },
    img: "./images/Hero.png",
    moldura: "card.png"
  },
  {
    Nome: "Niccolo",
    Atributos: { HP: 50, Força: 60, Defesa: 70, Elemento: 30 },
    img: "./images/Niccolo.png",
    moldura: "card.png"
  },
  {
    Nome: "Elazul ",
    Atributos: { HP: 70, Força: 80, Defesa: 42, Elemento: 82 },
    img: "./images/Elazul.png",
    moldura: "card.png"
  },
  {
    Nome: "Lady Blackpearl",
    Atributos: { HP: 72, Força: 82, Defesa: 42, Elemento: 82 },
    img: "./images/Lady_Blackpearl.png",
    moldura: "card.png"
  },
  {
    Nome: "Sandra",
    Atributos: { HP: 65, Força: 70, Defesa: 50, Elemento: 40 },
    img: "./images/Sandra.png",
    moldura: "card.png"
  },
  {
    Nome: "Lisa",
    Atributos: { HP: 60, Força: 20, Defesa: 12, Elemento: 80 },
    img: "./images/Lisa.png",
    moldura: "card.png"
  },
  {
    Nome: "Bud",
    Atributos: { HP: 60, Força: 20, Defesa: 12, Elemento: 80 },
    img: "./images/Bud.png",
    moldura: "card.png"
  },
  {
    Nome: "Daena ",
    Atributos: { HP: 75, Força: 82, Defesa: 41, Elemento: 60 },
    img: "./images/Daena.png",
    moldura: "card.png"
  },  
  {
    Nome: "Larc",
    Atributos: { HP: 60, Força: 82, Defesa: 20, Elemento: 60 },
    img: "./images/Larc_the_Centaur.png",
    moldura: "card.png"
  },
  {
    Nome: "Sierra",
    Atributos: { HP: 45, Força: 85, Defesa: 46, Elemento: 52 },
    img: "./images/Sierra.png",
    moldura: "card.png"
  },
  {
    Nome: "Escad",
    Atributos: { HP: 62, Força: 85, Defesa: 45, Elemento: 52 },
    img: "./images/Youth_Escad.png",
    moldura: "card.png"
  },  
  {
    Nome: "Elle",
    Atributos: { HP: 65, Força: 1, Defesa: 25, Elemento: 100 },
    img: "./images/Elle.png",
    moldura: "card.png"
  },  
  {
    Nome: "Count Dovula",
    Atributos: { HP: 70, Força: 80, Defesa: 60, Elemento: 80 },
    img: "./images/Count_Dovula.png",
    moldura: "card.png"
  },
  {
    Nome: "Kristie",
    Atributos: { HP: 80, Força: 80, Defesa: 80, Elemento: 80 },
    img: "./images/Kristie.png",
    moldura: "card.png"
  },
  {
    Nome: "Kathinja",
    Atributos: { HP: 30, Força: 12, Defesa: 60, Elemento: 90 },
    img: "./images/Kathinja.png",
    moldura: "card.png"
  },
  {
    Nome: "Faerie",
    Atributos: { HP: 40, Força: 30, Defesa: 12, Elemento: 60 },
    img: "./images/Faerie.png",
    moldura: "card.png"
  },  
  {
    Nome: "Sproutling",
    Atributos: { HP: 30, Força: 40, Defesa: 30, Elemento: 40 },
    img: "./images/Sproutling.png",
    moldura: "card.png"
  },
  {
    Nome: "Irwin",
    Atributos: { HP: 65, Força: 70, Defesa: 60, Elemento: 60 },
    img: "./images/Irwin.png",
    moldura: "card.png"
  },
  {
    Nome: "Matilda",
    Atributos: { HP: 65, Força: 40, Defesa: 40, Elemento: 40 },
    img: "./images/Matilda_young.png",
    moldura: "card.png"
  },
  {
    Nome: "Belle",
    Atributos: { HP: 30, Força: 30, Defesa: 30, Elemento: 75 },
    img: "./images/Belle.png",
    moldura: "card.png"
  },
  {
    Nome: "Pokiehl",
    Atributos: { HP: 70, Força: 70, Defesa: 70, Elemento: 70 },
    img: "./images/Pokiehl.png",
    moldura: "card.png"
  },
  {
    Nome: "Mephianse",
    Atributos: { HP: 45, Força: 45, Defesa: 30, Elemento: 75 },
    img: "./images/Mephianse.png",
    moldura: "card.png"
  },
  {
    Nome: "Flameshe",
    Atributos: { HP: 65, Força: 35, Defesa: 35, Elemento: 65 },
    img: "./images/Flameshe.png",
    moldura: "card.png"
  },
  {
    Nome: "Monique",
    Atributos: { HP: 60, Força: 35, Defesa: 35, Elemento: 55 },
    img: "./images/Monique.png",
    moldura: "card.png"
  }
];

// ----------------------- VARIAVEIS ---------------------- //

var cartaJogador;
var cartaPC;
var cartasJogo;

var placar = [0, 0, 0]; 
exibePlacar();

var tagID = ["Jogador", "PC"];
var cartaID = ["carta-jogador", "carta-maquina"]; // ids no HTML da posição do texto
zerarCarta(cartaID[0]);
zerarCarta(cartaID[1]);
// Zera as cartas (na tela) (mostra o verso da carta)

botaoJogar(); 

// ----------------------- FUNÇÕES ---------------------- //

// Habilita o botão 'Jogar'
function botaoJogar() {
  var botao = document.getElementById("botao-jogar");
  var botaoHTML =
    '<button class="button-jogar" type="button" id="btnJogar" onclick="jogar()" disabled="false">Jogar</button>';
  botao.innerHTML = botaoHTML;
}

// Zerar cartas na tela inicial
function zerarCarta(id) {
  var opcoes = document.getElementById(id);
  // Mostra o verso da carta
  var opcoesTexto = 
    '<img src="card-back.png" style=" width: inherit; height: inherit; position: absolute;">';
  opcoes.innerHTML = opcoesTexto;
}

// Exibe placar
function exibePlacar() {
  var exibePlacar0 = document.getElementById("placar0");
  var textoPlacar0 = placar[0];
  exibePlacar0.innerHTML = textoPlacar0;
  var exibePlacar1 = document.getElementById("placar1");
  var textoPlacar1 = placar[1];
  exibePlacar1.innerHTML = textoPlacar1;
}

// Botão sortear
function sortearCarta() {

  // Zera carta do PC
  zerarCarta(cartaID[1]);

  botaoJogar(); 

  // Limpa campo de resultados
  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";

  // Numero aleatório p/ selecionar cartas jogador
  var numeroJogador = parseInt(Math.random() * cartas.length);
  cartaJogador = cartas[numeroJogador];
  //console.log(cartaJogador);

  // Número aleatório p/ selecionar carta PC
  var numeroPC = parseInt(Math.random() * cartas.length);
  // Fazer verificação p/ que não haja repetido
  while (numeroPC == numeroJogador) {
    var numeroPC = parseInt(Math.random() * cartas.length);
  }
  //Definião da carta do PC
  cartaPC = cartas[numeroPC]; 

  // Array do jogo
  cartasJogo = [cartaJogador, cartaPC];

  // Desabilitar botão 'sortear cartas'
  document.getElementById("btnSortear").disabled = true;

  // (botão de jogar desabilitado até um atributo ser selecionado)

  exibirCarta(tagID[0], cartaID[0], 0, 0, 0);
  // Mostra carta jogador com botões p/ selecionar
}

// tagID   -> tagID[0]="Jogador" (p/ jogador) ou tagID[1]="PC" (p/ PC)
// cartaID -> "carta-jogador" (cartaID[0]) ou "carta-PC" (cartaID[1])
// ID      -> ID=0 (p/ jogador) ou ID=1 (p/ PC)
// jogo    -> jogo=0 (opções c/ botões) ou jogo=1 (opções s/ botões)
// atributoSelect -> atributo selecionado (atributoSelect=0 caso ainda não tenha sido selecionado)
function exibirCarta(tagID, cartaID, ID, jogo, atributoSelect) {
  var divCarta = document.getElementById(cartaID);
  divCarta.style.backgroundImage = `url(${cartasJogo[ID].img})`;

  var moldura = "";
  moldura +=
    '<img src="' +
    cartasJogo[ID].moldura +
    '" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='" + tagID + "' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartasJogo[ID].Atributos) {
    if (jogo == 0) {
      opcoesTexto += `
      <input type='radio' onclick='habilitarJogar()' name='atributo' 
      id='${atributo}' value='${atributo}'>`;
      opcoesTexto += `
      <label for='${atributo}'>`;
      opcoesTexto += `
      ${atributo}:${cartasJogo[ID].Atributos[atributo]}</label><br>`;
    } else {
      if (atributo == atributoSelect) {
        opcoesTexto += `<p style='color: crimson;'><strong>
          ${atributo}:${cartasJogo[ID].Atributos[atributo]}</strong></p>`;
      } else {
        opcoesTexto += `
          <p>${atributo}:${cartasJogo[ID].Atributos[atributo]}</p>`;
      }
    }
  }

  var nome = `<p class="carta-subtitle">${cartasJogo[ID].Nome}</p>`;

  divCarta.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

// Habilita botão 'jogar' após selecionar um atributo
function habilitarJogar() {
  document.getElementById("btnJogar").disabled = false;
}

// Obter atributo selecionado
function obterAtributo() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

// Botão jogar
function jogar() {
  // Obtem o atributo selecionado
  var atributoSelect = obterAtributo();
  var valorCartaJogador = cartaJogador.Atributos[atributoSelect];
  var valorCartaPC = cartaPC.Atributos[atributoSelect];

  // Computa placar
  var divResultado = document.getElementById("resultado");
  var elementoResultado;

  if (valorCartaJogador > valorCartaPC) {
    elementoResultado = "<p class='resultado-final'>Vitória</p>";
    placar[0]++; // Adiciona 1 no placar do jogador
  } else if (valorCartaJogador < valorCartaPC) {
    elementoResultado = "<p class='resultado-final'>Derrota</p>";
    placar[1]++; // Adiciona 1 no placar do PC 
  } else {
    elementoResultado =
      "<p class='resultado-final'>Empate</p>";
    placar[2]++; // Adiciona 1 no placar de empates
  }

  divResultado.innerHTML = elementoResultado;
  exibePlacar();

  // Mostra a carta do PC
  exibirCarta(tagID[1], cartaID[1], 1, 1, atributoSelect);
  // Mostra a carta do jogador com destaque no atributo selecionado
  exibirCarta(tagID[0], cartaID[0], 0, 1, atributoSelect);

  // Substitui o botão 'Jogar' pelo de sortear
  var botao = document.getElementById("botao-jogar");
  var botaoHTML =
    '<button class="button-jogar" type="button" id="btnSortear" onclick="sortearCarta()">Sortear outra carta</button>';
  botao.innerHTML = botaoHTML;

  // Desabilita botão jogar
  document.getElementById("btnSortear").disabled = false;
}

// Botão zerar jogo
function zerarJogo() {
  // Desabilita botão sortear
  document.getElementById("btnSortear").disabled = false;
  botaoJogar();

  // Limpa campo de resultados
  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";

  // Mostra carta back
  zerarCarta(cartaID[0]);
  zerarCarta(cartaID[1]);

  // Zera placar
  placar = [0, 0, 0];
  exibePlacar();
}

const pikachu = {
  nome: "Pikachu",
  avatar:
    "https://www.pinpng.com/pngs/m/272-2726554_surfing-pikachu-pokemon-pixel-art-png-transparent-png.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

const zelda = {
  nome: "Zelda",
  avatar:
    "https://i.pinimg.com/564x/9c/2a/1a/9c2a1a4c9bd6c8237fa258dfa1af6f01--link-zelda-legend-of-zelda.jpg",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

const kirby = {
  nome: "Kirby",
  avatar:
    "https://www.seekpng.com/png/detail/314-3147880_kirby-kirby-pixel-art.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

const donkey = {
  nome: "Donkey Kong",
  avatar:
    "https://www.pinclipart.com/picdir/middle/327-3273873_donkey-kong-no-donkey-kong-country-pixel-clipart.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

const megaman = {
  nome: "Mega Man",
  avatar:
    "https://w7.pngwing.com/pngs/49/910/png-transparent-mega-man-x8-mega-man-bass-mega-man-maverick-hunter-x-pixel-art-video-game-bead-fictional-character.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};


pikachu.pontos = calculaPontos(pikachu);
zelda.pontos = calculaPontos(zelda);
kirby.pontos = calculaPontos(kirby);
donkey.pontos = calculaPontos(donkey);
megaman.pontos = calculaPontos(megaman);

function calculaPontos(jogador) {
  let pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

let jogadores = [pikachu, zelda, kirby, donkey, megaman];

function exibeJogadoresNaTela(jogadores) {
  let elemento = "";

  for (let i = 0; i < jogadores.length; i++) {
    elemento += `
    <tr><td><img src="${jogadores[i].avatar}"></td>
    <td>${jogadores[i].nome}</td>
    <td>${jogadores[i].vitorias}</td>
    <td>${jogadores[i].empates}</td>
    <td>${jogadores[i].derrotas}</td>
    <td>${jogadores[i].pontos}</td>
    <td><button id="vitoria(${i})" class="vitoria" onClick="adicionarVitoria(${i})">Vitória</button></td>
    <td><button id="empate(${i})" class="empate" onClick="adicionarEmpate(${i})">Empate</button></td>
    <td><button id="derrota(${i})" class="derrota" onClick="adicionarDerrotas(${i})">Derrota</button></td>
    <td><button id="derrota(${i})" class="excluir" onClick="onclick=excluirJogador(${i})">❌</button></td>
    </tr>
    `;
  }
  let tabelaJogadores = document.getElementById("tabela-jogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function limpaInput() {
  document.getElementById("nomeJogador").value = "";
  document.getElementById("avatarJogador").value = "";
}

// Jogadores com mais vitórias vão para o topo
function ordemClassificacao() {
  jogadores.sort(function (a, b) {
    if (a.pontos < b.pontos) {
      return 1;
    } else if (a.pontos == b.pontos) {
      return 0;
    } else {
      return -1;
    }
  });
}

// Botão adicionar jogador
function adicionarJogador() {
  let avatarJogador = document.getElementById("avatarJogador").value;
  let nomeJogador = document.getElementById("nomeJogador").value; 

  let nomeJogadores = jogadores.map(function (jogadores) {
    return jogadores.nome;
  });

  let mesmoNome = jogadores.some(function (nomeJogadores) {
    return nomeJogadores.nome === nomeJogador;
  });

  if (mesmoNome) {
    let texto = document.getElementById("texto");
    texto.innerHTML = "Esse jogador já foi inserido...";
  } else {
    if (avatarJogador.endsWith(".png")) {
      let novoJogador = {
        nome: nomeJogador,
        avatar: avatarJogador,
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0
      };
      jogadores.push(novoJogador);

      for (i = 0; i < jogadores.length; i++) {
        let jogador = jogadores[i];
        jogador.pontos = calculaPontos(jogador);
      }
      ordemClassificacao(jogadores);
      exibeJogadoresNaTela(jogadores);
      let texto = document.getElementById("texto");
      texto.innerHTML = "jogador adicionado";
    } else {
      let texto = document.getElementById("texto");
      texto.innerHTML =
        "Esse formato de imagem é inválido... insira uma imagem com final .png";
    }
  }
  limpaInput();
}

// Botão X
// i = índice do array jogadores
function excluirJogador(i) {
  var jogador = jogadores[i];
  for (var i = 0; i < jogadores.length; i++) {
    if (jogadores[i] == jogador) {
      var indice = jogadores.indexOf(jogador);
      if (indice > -1) {
        jogadores.splice(indice, 1);
      }
    }
  }
  exibeJogadoresNaTela(jogadores);
}

// Botão zerar pontuação
function resetarJogo() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibeJogadoresNaTela(jogadores);
}

// Botão Remover todos jogadores
function resetarTabela() {
  var aviso = confirm("Você tem certeza que quer remover todos os jogadores?");
  if (aviso == true) {
    jogadores = [];
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarVitoria(i) {
  let texto = document.getElementById("texto");
  texto.innerHTML = "";
  let botaoEmpate = document.getElementById(`empate(${i})`);
  if (botaoEmpate.disabled == false) {
    let jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
    ordemClassificacao();
    let botaoDerrota = document.getElementById(`derrota(${i})`);
    botaoDerrota.disabled = true;

    for (let c = 0; c < jogadores.length; c++) {
      let botaoEmpate = document.getElementById(`empate(${c})`);
      botaoEmpate.disabled = true;
      let botaoVitoria = document.getElementById(`vitoria(${c})`);
      botaoVitoria.disabled = true;
    }
  } else {
    let jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
    let botaoDerrota = document.getElementById(`derrota(${i})`);
    botaoDerrota.disabled = false;

    for (let c = 0; c < jogadores.length; c++) {
      let botaoEmpate = document.getElementById(`empate(${c})`);
      botaoEmpate.disabled = false;
      let botaoVitoria = document.getElementById(`vitoria(${c})`);
      botaoVitoria.disabled = false;
    }
  }
}

function adicionarEmpate(i) {
  let texto = document.getElementById("texto");
  texto.innerHTML = "";
  let botaoDerrota = document.getElementById(`derrota(${i})`);
  if (botaoDerrota.disabled == false) {
    let jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
    let botaoEmpate = document.getElementById(`empate(${i})`);
    botaoEmpate.disabled = true;

    for (let c = 0; c < jogadores.length; c++) {
      let botaoVitoria = document.getElementById(`vitoria(${c})`);
      botaoVitoria.disabled = true;
      let botaoDerrota = document.getElementById(`derrota(${c})`);
      botaoDerrota.disabled = true;
      ordemClassificacao();
    }
  } else {
    let jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
    let botaoEmpate = document.getElementById(`empate(${i})`);
    botaoEmpate.disabled = false;

    for (let c = 0; c < jogadores.length; c++) {
      let botaoVitoria = document.getElementById(`vitoria(${c})`);
      botaoVitoria.disabled = false;
      let botaoDerrota = document.getElementById(`derrota(${c})`);
      botaoDerrota.disabled = false;
      ordemClassificacao();
    }
  }
}

function adicionarDerrotas(i) {
  let texto = document.getElementById("texto");
  texto.innerHTML = "";
  let botaoEmpate = document.getElementById(`empate(${i})`);
  if (botaoEmpate.disabled == false) {
    let jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
    let botaoVitoria = document.getElementById(`vitoria(${i})`);
    botaoVitoria.disabled = true;

    for (let c = 0; c < jogadores.length; c++) {
      let botaoDerrota = document.getElementById(`derrota(${c})`);
      botaoDerrota.disabled = true;
      let botaoEmpate = document.getElementById(`empate(${c})`);
      botaoEmpate.disabled = true;
      ordemClassificacao();
    }
  } else {
    let jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
    let botaoVitoria = document.getElementById(`vitoria(${i})`);
    botaoVitoria.disabled = false;

    for (let c = 0; c < jogadores.length; c++) {
      let botaoDerrota = document.getElementById(`derrota(${c})`);
      botaoDerrota.disabled = false;      
      let botaoEmpate = document.getElementById(`empate(${c})`);
      botaoEmpate.disabled = false;
      ordemClassificacao();
    }
  }
}

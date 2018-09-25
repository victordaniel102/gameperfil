
//congifurações
var Game = {
        player: {
            names: []
        },
        score: 10
    },
    sort, x,
    //seletores
    selectores = {
        jogar: document.querySelector('.togame'),
        players: document.querySelectorAll('.rd-text'),
        mediador: document.querySelector('.mediador'),
        jogador: document.querySelector('.jogador'),
        pLength: function () {
            return this.players.length
        }
    },
    //animação
    anim = {
        cartas: function () {
            document.querySelector('.cartas').style.display = '';
            document.querySelector('.players').style.display = 'none';
        }
    }
//eventos
selectores.jogar.addEventListener('click', jogar); // <-- o evento declaro em hidden
//pega os nomes e da init no class partida
function jogar() {
    sort = 0;
    for (let i = 0; i < selectores.pLength(); i++) {
        if (selectores.players[i].textContent) {
            Game.player.names[sort] = selectores.players[i].textContent;
            sort++;
        }
    }
    if (sort >= 2) {
        let qtd = sort;
        let valor = Game.score;
        let iniciar = new partida(sort, Game.score);

        console.log(iniciar); // <--- aperte shift + i para abrir o console

        iniciar.iniciarPartida(Game);
        anim.cartas(); // <--- animação

    } else console.error('numero de participantes invalido');
}
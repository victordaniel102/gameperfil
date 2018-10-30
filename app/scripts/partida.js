class partida{
    constructor(names) {
        this.players = names;
        this.valorDaVitoria = 10;
        this.rodadas = [];
        this.perfilsUsados = [];
        this.finalizada = false;
    }

    iniciarPartida() {
        this.nomes = this.players.sort((a, b) => { return 0.5 - Math.random() });
        for(let x in this.nomes){
            this.players[x] = new participante(this.nomes[x], x, 0);
        }
    }

    sortPlayers(){
        //eu iria fazer um sort, mas o metódo chega  ser maior que isto
        var a = [], pl = this.players;
        for(let i = 0; i < pl.length; i++){
            i === (pl.length - 1) ? a[i] = pl[0] : a[i] = pl[i + 1];
        }
        this.players = a;
    }

    iniciarRodada(i){
        this.rodadas[i] = new rodada(this.players, this.perfilsUsados);
        this.rodadas[i].setRodada();
        //reoordenando os jogadores
        this.sortPlayers();
    }

    finalizarRodada(r){
        r.jogador.placar += r.pontuacao;
        r.jogador.placar <= this.valorDaVitoria ? this.finalizada : this.finalizada = true;
        r.mediador.placar += (r.dicasUsadas.length - r.pontuacao);
        r.finalizada = true;
        console.log(this.finalizada)
    }

    updateRodada(r){
        r.pontuacao -= 1;
    }
}
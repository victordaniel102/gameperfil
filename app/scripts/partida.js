class partida{
    constructor(names) {
        this.players = names;
        this.valorDaVitoria = 10;
        this.rodadas = [];
        this.participante;
    }

    iniciarPartida() {
        this.nomes = this.players.sort((a, b) => { return 0.5 - Math.random() });
        for(let x in this.nomes){
            this.players[x] = new participante(this.nomes[x], x, 0);
        }
    }

    sortPlayers(){
        //eu iria fazer um sort, mas o metódo chega  ser maior que isto
        var a = [], pl = this.players.length;
        for(let i = 0; i < pl; i++){
            i === (pl - 1) ? a[i] = this.players[0] : a[i] = this.players[i + 1];
        }
        this.players = a;
    }

    iniciarRodada(i){
        this.rodadas[i] = new rodada(this.players);
        this.rodadas[i].iniciarRodada();
        //reoordenando os jogadores
        this.sortPlayers();
    }
}
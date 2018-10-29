class partida{
    constructor(names) {
        this.players = names;
        this.valorDaVitoria = 10;
        this.rodadas = [];
        this.perfilsUsados = [];
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
        this.rodadas[i].iniciarRodada();
        //reoordenando os jogadores
        this.sortPlayers();
    }
}
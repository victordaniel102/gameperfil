class partida {
  constructor(qnt, valor) {
    this.qntParticipante = qnt;
    this.valorDaVitoria = valor;
    this.rodadas = [];
    this.participante;
  }

  iniciarPartida(Game) {
    this.participante = new Array(this.qntParticipante);
    this.nomes = Game.player.names.sort((a, b) => { return 0.5 - Math.random() });

    for(let x in this.nomes){
      this.participante[x] = new participante(this.nomes[x], x, 0);
      console.log(this.participante[x]);
    }
    //ate agora só tem uma rodada entao...
    this.rodadas[1] = new rodada(1, this.participante);
    this.rodadas[1].iniciarRodada();
  }
}
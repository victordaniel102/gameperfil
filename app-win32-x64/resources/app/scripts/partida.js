class partida{
  constructor(qnt) {
    this.qntParticipante = qnt;
    this.valorDaVitoria = 10;
    this.rodadas = [];
    this.participante;
  }

  iniciarPartida(player_names) {
    this.participante = new Array(this.qntParticipante);
    this.nomes = player_names.sort((a, b) => { return 0.5 - Math.random() });

    for(let x in this.nomes){
      this.participante[x] = new participante(this.nomes[x], x, 0);
    }

    // apartir de agora a Partida esta em andamento
    this.iniciarRodada();
  }


  iniciarRodada(){
    //ate agora só tem uma rodada entao...
    this.rodadas[0] = new rodada(this.participante);
    this.rodadas[0].iniciarRodada();
  }
}
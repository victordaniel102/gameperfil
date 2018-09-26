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
      console.log(this.participante[x]);
    }
    // apartir de agora a Partida esta em andamento
    this.iniciarRodada();
  }


  iniciarRodada(){
    //ate agora só tem uma rodada entao...
    this.rodadas[1] = new rodada(1, this.participante);
    this.rodadas[1].iniciarRodada();
    console.log(this.rodadas[1]);
  }
}
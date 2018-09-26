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
      console.log(this.participante[x]); // estou deixando o log novamente para o senhor poder visualizar o andamento
    }
    //inicia primeira rodada
    this.iniciarRodada(1, this.participante);
  }

  iniciarRodada(index, jogadores){
    this.rodadas[index] = new Rodada(index, jogadores);
    this.rodadas[index].setInfos();
  }
}
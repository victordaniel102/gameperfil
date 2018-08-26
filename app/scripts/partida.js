//isso n preciso explicar pq foi oque dani fez
class partida {
  constructor(qnt, valor) {
    this.qntParticipante = qnt;
    this.valorDaVitoria = valor;
  }

  iniciarPartida() {
    this.participante = new Array(this.qntParticipante);
    for(x in Game.player.names){
      this.participante[x] = new participante(Game.player.names[x], x, 0);
      //lembrete pra lembrar de deletar o console log
      console.log(this.participante[x])
    }
  }
}
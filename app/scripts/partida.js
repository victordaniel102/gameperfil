class partida {
  /**
   * partida vai ser usada como paremetro por todas as outras classes
  */
  constructor(qnt, valor) {
    this.qntParticipante = qnt;
    this.valorDaVitoria = valor;
  }

  iniciarPartida() {
    this.participante = new Array(this.qntParticipante);
    
    if (this.qntParticipante <= 4 && this.qntParticipante >= 2) {
      for(var i = 0;  i < this.qntParticipante; i++){
        this.participante[i] = new participante("pedro_"+i, i, 0);
      }
    }
  }
}
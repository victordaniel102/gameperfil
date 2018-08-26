class partida {
  /**
   * partida vai ser usada como paremetro por todas as outras classes
  */
  constructor(qnt, valor) {
    this.qntParticipante = qnt;
    this.valorDaVitoria = valor;
  }

  iniciarPartida() {
    // Game.randPerfil()
    this.participante = new participante("pedro", 1, 0);
  }
}
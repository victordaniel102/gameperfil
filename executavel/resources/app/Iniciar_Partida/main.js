QUnit.test( "Iniciar Partida", function( assert ) {
	var names = ["danielle", "daniel", "pedro", "yam"];
    this.partida = new partida(names);

    //
    this.partida.iniciarPartida();  
    // a instancia dos participante é feita no método iniciar partida. Portanto, se os participantes possuem 
    // nome indefinido é por que a partida ainda não foi iniciada
    assert.notEqual(this.partida.players[1].nome, undefined, 'Partida criada');

    //
    this.partida.iniciarRodada('test');
    this.rodada = this.partida.rodadas[this.partida.turno];    
    // o mediador é definido ao iniciar a rodada  
    assert.notEqual(this.partida.rodadas[this.partida.turno].mediador, undefined, 'Mediador definido');
});
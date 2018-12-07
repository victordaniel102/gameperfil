QUnit.test( "Iniciar Rodada", function( assert ) {
    var names = ["danielle", "daniel", "pedro", "yam"];
    this.partida = new partida(names);
    this.partida.iniciarPartida();

    //
    this.partida.iniciarRodada('test');
    this.rodada = this.partida.rodadas[this.partida.turno];  
    
    // o perfil é sorteado dentro do método iniciar rodada
    assert.notEqual(this.rodada.perfil, undefined, 'Perfil sorteado');

    //
    // a comparação foi feita de modo que o jogador terá a ordem um número menor a ordem do mediador, 
    // haja vista que são uma sequência
    assert.equal(this.rodada.mediador.ordem, this.rodada.jogador.ordem - 1, 'O jogador da vez é o seguinte ao mediador');
})
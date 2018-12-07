QUnit.test( "Tentar Acerto", function( assert ) {
    //
    var names = ["danielle", "daniel", "pedro", "yam"];
    this.partida = new partida(names);
    this.partida.iniciarPartida();

    //
    this.partida.iniciarRodada('test');
    this.rodada = this.partida.rodadas[this.partida.turno]; 

    // ver se uma dica é removida 
    var p = this.rodada.pontuacao;
    this.partida.tentarAcerto(false, 'test');
    this.rodada = this.partida.rodadas[this.partida.turno]; 
    assert.equal(p, this.rodada.pontuacao + 1, 'palpite errado: Uma dica foi removida');


    //
    var omediador = this.rodada.mediador.ordem;
    var ojogador = this.rodada.jogador.ordem;
    var numRodada = this.partida.rodadaNum;
    this.partida.tentarAcerto(true, 'test');
    this.rodada = this.partida.rodadas[this.partida.turno]; 


    // alteração do mediador
    assert.equal(omediador, this.rodada.mediador.ordem - 1, 'palpite correto: o mediador foi alterado de acordo com a sequência');
    

    // alteração do jogador  
    assert.equal(ojogador, this.rodada.jogador.ordem - 1, 'palpite correto: o jogador foi alterado de acordo com a sequência');

    // verificar se a rodada é finalizada quando alguém ganha
    // se o atributo rodadaNum estiver acrescido de mais um, significa que uma nova roadad foi instanciada e consequentemente a anterior finalizada
    assert.equal(numRodada, this.partida.rodadaNum - 1, 'palpite correto: partida finalizada');

    //
    // testar se quando não há mais dicas disponiveis a rodada é finalizada 
    this.partida.iniciarRodada('test');
    this.rodada = this.partida.rodadas[this.partida.turno]; 


    p = this.rodada.pontuacao;
    numRodada = this.partida.rodadaNum;

    // tentando acertos até não haver mais dicas disponíveis 
    console.log(numRodada);
    for(let i = 0; i < p; i++){
        this.partida.tentarAcerto(false, 'test');
    }
    assert.equal(numRodada, this.partida.rodadaNum - 1, 'dicas esgotaram: uma nova rodada foi instanciada');
})
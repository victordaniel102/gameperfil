class Rodada {
	constructor(index, jogadores){
		this.mediador = jogadores[0];
		this.jogador = jogadores[1];
		this.numeroRodada = index;
	}

	sortearPerfil(){
		return new perfil().sortearPerfil();
	}

	setInfos(){
		selectores.mediador.textContent = this.mediador.nome;
		selectores.jogador.textContent = this.jogador.nome;
	}

	finalziarRodada(){
		//coming soon
	}

	tentarAcerto(){
		//coming soon
	}

	proximaRodada(){
		//coming soon
	}
}
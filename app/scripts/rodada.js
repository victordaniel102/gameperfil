class Rodada {
	constructor(index, jogadores){
		this.mediador = jogadores[0];
		this.jogador = jogadores[1];
		this.numeroRodada = index;
		this.perfil = new perfil();
		this.finalizada = false;
	}

	getPerfil(){
		return this.perfil.sortearPerfil();
	}

	setInfos(){
		//mudando o html
		selectores.mediador.textContent = this.mediador.nome;
		selectores.jogador.textContent = this.jogador.nome;
	}

	finalziarRodada(){
		this.finalizada = true;
	}

	tentarAcerto(){
		//coming soon
	}
}
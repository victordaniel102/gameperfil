class rodada {
	constructor(jogadores, perfis){
		this.finalizada = false;
		this.perfil;
		this.dicasUsadas = [];
		this.perfis = perfis;

		this.mediador = jogadores[0];
		this.jogador = jogadores[1];
	}

	sortearPerfil(){
  		//banco json
  		const fs = require('fs');
  		const banco = JSON.parse(fs.readFileSync("./dataBase/Data.json", "utf8"));

  		var collection = banco.perfis, perfilJson, t = false;
  		while(t === false){
  			perfilJson = collection[Math.floor(Math.random() * collection.length)];
  			t = this.teste(perfilJson);
  		}

  		for(let i = 0; i < perfilJson.dicas.length; i++){
  			this.dicasUsadas[i] = new dica(i, perfilJson.dicas[i]);
  		}
		//define o perfil
		this.perfil = new perfil(perfilJson.categoria, perfilJson.nome, this.dicasUsadas);
	}

	teste(p){
		var b = true;
		for(let x in this.perfis){
			this.perfis[x] == p.nome ? b = false : b;
		}
		return b;
	}

	iniciarRodada(){
		this.sortearPerfil();
	}

	finalziarRodada(){
		this.finalizada = true;
	}

	tentarAcerto(dica, jogador){
		//coming soon
	}
}
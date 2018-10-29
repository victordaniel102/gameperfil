class rodada {
	constructor(jogadores){
		this.finalizada = false;
		this.perfil;
		this.dicasUsadas = [];

		this.mediador = jogadores[0];
		this.jogador = jogadores[1];
	}

	sortearPerfil(){
  		//banco json
    	const fs = require('fs');
	    const banco = JSON.parse(fs.readFileSync("./dataBase/Data.json", "utf8"));
	    
		var collection = banco.perfis;
		collection = collection[Math.floor(Math.random() * collection.length)];

		for(let i = 0; i < collection.dicas.length; i++){
			this.dicasUsadas[i] = new dica(i, collection.dicas[i]);
		}
		//define o perfil
		this.perfil = new perfil(collection.categoria, collection.nome, this.dicasUsadas);
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
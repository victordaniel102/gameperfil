class rodada {
	constructor(index, jogadores){
		this.finalizada = false;
		this.perfil;
		this.dicasUsadas = [];
		this.dicas = [];

		this.mediador = jogadores[0];
		this.jogador = jogadores[1];

		this.numeroRodada = index;
		this.perfil = new perfil();
		this.finalizada = false;
	}

	sortearPerfil(){
  		//banco json
    	const fs = require('fs');
	    const banco = JSON.parse(fs.readFileSync("./dataBase/Data.json", "utf8"));
	    
		var collection = banco.dados;
		collection = collection[Math.floor(Math.random() * collection.length)].perfil;

		for(let i = 0; i < collection.dicas.length; i++){
			this.dicas[i] = new dica(i, collection.dicas[i]);
		}
		//define o perfil
		this.perfil = new perfil(collection.categoria, collection.nome, this.dicas);
	}

  	iniciarRodada(){
  		this.sortearPerfil();
		// //informa os dados ao usuario na interface
		// this.setHtml();
    }

	finalziarRodada(){
		this.finalizada = true;
	}

	tentarAcerto(dica, jogador){
		//coming soon
	}
}
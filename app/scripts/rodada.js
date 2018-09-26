class rodada {
	constructor(index, jogadores){
		this.finalizada = false;
		this.perfil;
		this.dicasUsadas = [];

		this.mediador = jogadores[0];
		this.jogador = jogadores[1];

		this.numeroRodada = index;
		this.perfil = new perfil();
		this.finalizada = false;
	}

	getPerfil(){
		return this.perfil.sortearPerfil();
	}

	setHtml(){
		selectores.mediador.textContent = this.mediador.nome;
		selectores.jogador.textContent = this.jogador.nome;
		
		selectores.resposta.forEach((nome, index) =>{
			//categoria
			selectores.categoria[index].textContent = this.perfil.categoria;
			//resposta
			selectores.resposta[index].textContent = this.perfil.nome;
		});
	}

  	iniciarRodada(){
  		//banco json
    	const fs = require('fs');
	    const banco = JSON.parse(fs.readFileSync("./dataBase/Data.json", "utf8"));
	    
		var collection = banco.dados;
		collection = collection[Math.floor(Math.random() * collection.length)].perfil;

		//define o perfil
		this.perfil = new perfil(collection.categoria, collection.nome, collection.dicas);

		//informa os dados ao usuario 
		this.setHtml();
    }

	finalziarRodada(){
		this.finalizada = true;
	}

	tentarAcerto(dica, jogador){
		//coming soon
	}
}
class perfil {
	constructor(nome, categoria, dicas){
		this.nome = nome;
		this.categoria = categoria;
		this.dicas = dicas;
	}
	// pega o banco em json
	banco(){
		//packages
	    this.fs = require('fs');
	    this.banco = JSON.parse(fs.readFileSync("./dataBase/Data.json", "utf8"));
	}
}
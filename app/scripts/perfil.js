class perfil {
	// pega os dados do json
	constructor(){
		this.fs = require('fs');
	    this.banco = JSON.parse(this.fs.readFileSync("./dataBase/Data.json", "utf8"));
	}

	sortearPerfil(){
		return this.banco.perfil.categoria.pessoas;
	}
}
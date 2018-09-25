class perfil {
	// pega os dados do json
	constructor(){
		this.fs = require('fs');
	    this.banco = JSON.parse(this.fs.readFileSync("./dataBase/Data.json", "utf8"));
	}

	sortearPerfil(){
		this.collection = this.banco.dados;
		return this.collection[Math.floor(Math.random() * this.collection.length)].perfil; // formato categoria / nome / dicas
	}
}

var b = new perfil();
console.log(b.sortearPerfil());
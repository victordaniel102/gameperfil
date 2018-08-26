const fs = require('fs');
const perfis = JSON.parse(fs.readFileSync("./dataBase/Data.json", "utf8"));

var Game = {
	randPerfil: function(){
		return perfis.categorias[Math.floor(Math.random() * perfis.categorias.length)];
	},
	cadastroPt: function(){
	
	}
}
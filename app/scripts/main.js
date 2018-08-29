const fs = require('fs');
const perfis = JSON.parse(fs.readFileSync("./dataBase/Data.json", "utf8"));

var Game = {
	randPerfil: function(){
		return perfis.categorias[Math.floor(Math.random() * perfis.categorias.length)];
	},
	player: {names:[]},
	score: 10
}, 
sort,x,
selectores = {
	jogar: document.querySelector('.togame'),
	players: document.getElementsByClassName('rd-text'),
	pLength: function(){return this.players.length}
}
//events handlers
selectores.jogar.addEventListener('click', jogar);
//pega os nomes e da init no class partida
function jogar(){
	sort = 0;
	for(var i = 0; i < selectores.pLength();i++){
		if(selectores.players[i].textContent){
			Game.player.names[sort] = selectores.players[i].textContent;
			sort++;
		}
	}
	if (sort >= 2) {
		this.iniciar = new partida(sort, Game.score);
  		//lembrete pra lembrar de deletar o console log
		console.log(this.iniciar);
		this.iniciar.iniciarPartida();
	}else console.error(null);
}


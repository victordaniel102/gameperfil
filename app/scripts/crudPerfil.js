class crudPerfil{
	constructor(){
		this.fs = require('fs');
	}

	loadPerfis(){
		this.banco = JSON.parse(this.fs.readFileSync("./dataBase/Data.json", "utf8"));
		return this.banco.perfis;
	}

	removePerfil(banco, query){
		var toDel = JSON.stringify(banco);
		var toReplace = this.findPerfil(banco.perfis, {"nome": query});

		if(toDel.indexOf(',' + JSON.stringify(toReplace)) == -1){
			toDel = toDel.replace(JSON.stringify(toReplace)+',', '');
		}else {
			toDel = toDel.replace(','+JSON.stringify(toReplace), '');
		}

		this.savePerfil(JSON.parse(toDel));
		this.banco = JSON.parse(toDel);
	}

	findPerfil(db, query){
		var result = [];
		for(let x in db){
			let base = JSON.stringify(db[x]);
			let tofind = JSON.stringify(query).replace('{', '').replace('}', '');

			if(base.indexOf(tofind) != -1)  result.push(db[x]);
		}
		result = result.length === 1 ? result = result[0] : result = result;
		return result;
	}

	savePerfil(data){
		this.fs.writeFile('./dataBase/Data.json', JSON.stringify(data), (err) => {
			if(err) throw err;
		});
	}
}
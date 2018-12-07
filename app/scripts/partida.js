class partida{
    constructor(names) {
        this.players = names;
        this.valorDaVitoria = 10;
        this.rodadas = [];
        this.perfilsUsados = [];
        this.finalizada = false;
        this.turno = 0;
        this.rodadaNum = 0;
    }

    iniciarPartida() {

        if(this.players.length >= 2 && this.players.length <= 4){
            this.nomes = this.players.sort((a, b) => { return 0.5 - Math.random() });
            for(let x in this.nomes){
                this.players[x] = new participante(this.nomes[x], x, 0);
            }
        }
        else return 'error';
    }

    sortPlayers(){
        //eu iria fazer um sort, mas o metódo chega  ser maior que isto
         var a = [], pl = this.players;
        for(let i = 0; i < pl.length; i++){
            i === (pl.length - 1) ? a[i] = pl[0] : a[i] = pl[i + 1];
        }
        this.players = a;
    }

    iniciarRodada(test){
        if(!test){
            this.rodadas[this.rodadaNum] = new rodada(this.players, this.perfilsUsados);
            this.rodadas[this.rodadaNum].setRodada();
        }else {
            this.rodadas[this.rodadaNum] = new rodada(this.players);
            this.rodadas[this.rodadaNum].setRodada(['dani', 'lima', 'clima', 'clima', 'clima', 'clima', 'clima']);
        }
        // //reoordenando os jogadores
        this.sortPlayers();
    }

    finalizarRodada(r, test){
        //console.log(r.jogador);
        //console.log(r.mediador);
        r.jogador.placar += r.pontuacao;
        r.jogador.placar <= this.valorDaVitoria ? this.finalizada : this.finalizada = true;

        r.mediador.placar += (r.dicasUsadas.length - r.pontuacao);
        r.mediador.placar <= this.valorDaVitoria ? this.finalizada : this.finalizada = true;

        r.finalizada = true;
        this.rodadaNum += 1;
        
        if(test){
            this.iniciarRodada(test);
        }else {
            this.iniciarRodada();
        }
    }

    updateRodada(r){
        var t = true;
        r.pontuacao -= 1;
        if(r.pontuacao === 0) t = false;
        return t;
    }

    tentarAcerto(type, test){
        if(arguments.length == 2){
             //certa
             if(type){
                this.turno++;
                this.updateRodada(this.rodadas[this.rodadaNum]);
                this.finalizarRodada(this.rodadas[this.rodadaNum], test);
            }else { // <-- errada
                //muda a rodada e finaliza se for a ultima
                if(!this.updateRodada(this.rodadas[this.rodadaNum])){
                 this.finalizarRodada(this.rodadas[this.rodadaNum], test);
                }
             }
         
        }else {
            //certa
            if(type){
                this.turno++;
                this.updateRodada(this.rodadas[this.rodadaNum]);
                this.finalizarRodada(this.rodadas[this.rodadaNum]);
            }else { // <-- errada
                //muda a rodada e finaliza se for a ultima
                if(!this.updateRodada(this.rodadas[this.rodadaNum])){
                    this.finalizarRodada(this.rodadas[this.rodadaNum]);
                }
            }
        }
    }
}
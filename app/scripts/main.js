class Ui {
    constructor(){
        this.player_names = [];
        this.clikar_cartas = true;
    }

    sel(element){
        this.el = document.querySelectorAll(element);
        if (this.el.length == 1) this.el = this.el[0];
        //retorna o elemento
        return this.el;
    }

    eventos(){
        var verif = this.clikar_cartas;
        // this.flipper.forEach(function(name, index){name.addEventListener('click', () => { if(verif){Show(name)}verif = false})});
        this.sel('.togame').addEventListener('click', () => this.clickJogar(this.sel('.rd-text')));
    }

    setHtml(mediador, jogador){
        this.sel('.mediador').innerHTML = mediador.nome;
        this.sel('.jogador').innerHTML = jogador.nome;
    }

    clickJogar(el){
       var sort = 0;
        for (var i = 0; i < el.length; i++) {
            if (el[i].textContent) {
                this.player_names[sort] = el[i].textContent;
                sort++;
            }
        }
        if (sort >= 2) {
            let qtd = sort;
            let iniciar = new partida(qtd);
            //lembrar de tirar isso
            console.log(iniciar);

            iniciar.iniciarPartida(this.player_names);
            this.showCartas();

        }else console.error('numero de participantes invalido');
    }   

    showCartas() {
        this.sel('.cartas').style.display = '';
        this.sel('.players').style.display = 'none';
    }

    cardFlip(name){
        name.style.transform = "rotateY(180deg)";
    }

    init(){
        this.eventos();
    }
}
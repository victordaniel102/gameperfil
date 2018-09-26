class Ui{
    constructor(){
        this.player_names = [];
        this.clikar_cartas = true;
    }

    seletores(){
        //components 
        this.jogar = document.querySelector('.togame');
        this.players_input = document.querySelectorAll('.rd-text');
        const mediador = document.querySelector('.mediador');
        const jogador = document.querySelector('.jogador');
        this.cards = document.querySelector('.cards');
        this.flipper = document.querySelectorAll('.flipper');
        this.categoria = document.querySelectorAll('.categoria');
        this.resposta = document.querySelectorAll('.resposta');
        this.cartas = document.querySelector('.cartas');
        this.players = document.querySelector('.players');
    }

    eventos(){
        var verif = this.clikar_cartas;
        // this.flipper.forEach(function(name, index){name.addEventListener('click', () => { if(verif){Show(name)}verif = false})});
        this.jogar.addEventListener('click', () => this.clickJogar(this.players_input));
    }

    // setHtml(mediador, jogador){
    //     mediador.textContent = mediador.nome;
    //     jogador.textContent = jogador.nome;
    // }

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
        this.cartas.style.display = '';
        this.players.style.display = 'none';
    }

    cardFlip(name){
        name.style.transform = "rotateY(180deg)";
    }

    init(){
        this.seletores();
        this.eventos();
    }
}
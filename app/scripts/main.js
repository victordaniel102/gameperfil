//congifurações
// @esse script só serve como uma bliblioteca de doom e fuuções
class Ui{
    constructor(){
        this.player_names = [];
        this.clikar_cartas = true;
    }

    seletores(){
        //components 
        this.jogar = document.querySelector('.togame');
        this.players_input = document.querySelectorAll('.rd-text');
        this.mediador = document.querySelector('.mediador');
        this.jogador = document.querySelector('.jogador');
        this.cards = document.querySelector('.cards');
        this.flipper = document.querySelectorAll('.flipper');
        this.categoria = document.querySelectorAll('.categoria');
        this.resposta = document.querySelectorAll('.resposta');
        this.cartas = document.querySelector('.cartas');
        this.players = document.querySelector('.players');
    }

    eventos(){
        // flipper.forEach(function(name, index){name.addEventListener('click', () => { if(c){cardFlip(name)}this.clikar_cartas=false})});
        this.jogar.addEventListener('click', () => this.click_jogar(this.players_input));
    }

    setHtml(){
        mediador.textContent = this.mediador.nome;
        jogador.textContent = this.jogador.nome;
        
        resposta.forEach((nome, index) =>{
            //categoria
            selectores.categoria[index].textContent = this.perfil.categoria;
            //resposta
            selectores.resposta[index].textContent = this.perfil.nome;
        });
    }

    click_jogar(el){
       var sort = 0;
        for (var i = 0; i < el.length; i++) {
               this.player_names[sort] = el[i].textContent;
                sort++;
        }
        if (sort >= 2) {
            let qtd = sort;
            let iniciar = new partida(qtd);
            //lembrar de tirar isso
            console.log(iniciar);

            iniciar.iniciarPartida(this.player_names);
            // this.cartas();

        } else console.error('numero de participantes invalido');
    }

    cartas() {
        cartas.style.display = '';
        players.style.display = 'none';
    }

    cardFlip(name){
        name.style.transform = "rotateY(180deg)";
    }

    init(){
        this.seletores();
        this.eventos();
    }
}
//onclick Jogar

//onclick Animação carta

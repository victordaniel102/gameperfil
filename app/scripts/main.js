class Ui
{
    constructor()
    {
        this.player_names = [];
        this.clikar_cartas = true;
    }

    sel(element)
    {
        this.el = document.querySelectorAll(element);
        if (this.el.length == 1) this.el = this.el[0];
        //retorna o elemento
        return this.el;
    }

    //seta os eventos
    eventos()
    {
        for (let i = 0; i < 3; i++)
        {
            this.sel('.flipper')[i].addEventListener('click', () =>
            {
                if (this.clikar_cartas) this.cardFlip(this.sel('.flipper')[i]);
                this.clikar_cartas = false;
            });
        }
        this.sel('.togame').addEventListener('click', () =>
        {
            this.clickJogar(this.sel('.rd-text'))
        });
    }

    //muda as informações do html
    setHtml(mediador, jogador, perfil)
    {
        this.sel('.mediador').textContent = mediador.nome;
        this.sel('.jogador').textContent = jogador.nome;

        for(let i = 0; i < 3; i++){
            this.sel('.categoria')[i].textContent = perfil.categoria;
            this.sel('.resposta')[i].textContent = perfil.nome;
        }
    }

    //botao que da boot na partida
    clickJogar(el)
    {
        var sort = 0;
        for (var i = 0; i < el.length; i++)
        {
            if (el[i].textContent)
            {
                this.player_names[sort] = el[i].textContent;
                sort++;
            }
        }
        if (sort >= 2)
        {
            let qtd = sort;
            let iniciar = new partida(qtd);
            //====================
            console.log(iniciar); // <--- debug
            //====================
            iniciar.iniciarPartida(this.player_names);
            this.showCartas();
        }
        else console.error('numero de participantes invalido');
    }

    //mostra a proxima tela
    showCartas()
    {
        this.sel('.cartas').style.display = '';
        this.sel('.players').style.display = 'none';
    }

    //gira a carta
    cardFlip(el)
    {
        el.style.transform = "rotateY(180deg)";
    }

    //onload
    init()
    {
        this.eventos();
    }
}
class Ui
{
    constructor()
    {
        this.clikar_cartas = true;
    }

    init()
    {
        //iicia todos os eventos
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

    initCrud()
    {
        this.crud = new crudPerfil();
        this.printPerfis(this.crud.loadPerfis());
    }

    printPerfis(perfis){
        perfis.forEach((el, i) =>{
            var crudEl = 
            `<div class="dica-crud" data-name="${el.nome}">
            <span class="name-perfil">${el.nome}</span>
            <div class="opts">
            <div class="edit-perfil">
            <img src="img/edit.png">
            </div>
            <div class="del-perfil">
            <img src="img/errado.png">
            </div>
            </div>
            </div>`;

            this.sel('.dicasCrud').innerHTML += crudEl;
        });

        //delete
        this.sel('.dica-crud').forEach((e) => {
            e.querySelector('.del-perfil').addEventListener('click', event => {
                var id = e.getAttribute('data-name');
                this.delPerfil(e, id);
            })
        })
    }

    delPerfil(el, id){
        el.remove();
        this.crud.removePerfil(this.crud.banco, id);        
    }

    sel(element)
    {
        var el = document.querySelectorAll(element);
        if (el.length == 1) el = el[0];
        //retorna o elemento do doom que foi requerido
        return el;
    }

    //botao que da boot na partida
    clickJogar(el)
    {
        var sort = 0, player_names = [];
        for (var i = 0; i < el.length; i++)
        {
            if (el[i].textContent)
            {
                player_names[sort] = el[i].textContent;
                sort++;
            }
        }
        if (sort >= 2)
        {
            this.partida = new partida(player_names);
            this.partida.iniciarPartida();
            this.showCartas();
            this.setRodada();
        }
        else console.error('numero de participantes invalido');
    }

    setRodada(){
        this.partida.iniciarRodada(this.partida.turno);
        this.rodada = this.partida.rodadas[this.partida.turno];
        this.partida.perfilsUsados.push(this.rodada.perfil.nome);
        this.setHtml(
            this.rodada.mediador,  
            this.rodada.jogador, 
            this.rodada.perfil
            );
    }

    errada(el, p){
        el.classList.add('errada');
        this.update();
        //é errada, porém é a ultima ele reinicia o html
        if(this.partida.errada(this.rodada)){
            //reset html
           this.update();
           this.cardReset();
       }
   }

   correta(el){
    el.classList.add('correta');
        //isso é pra mudar o html, ele não faz nenhuma operação fora da ui
        this.partida.correta(this.rodada);
        this.partida.finalizada ? this.fimPartida() : this.setRodada();
        //reset html
        this.update();
        this.cardReset();
    }

    //muda as informações do html
    setHtml(mediador, jogador, perfil)
    {
        this.sel('.mediador').textContent = mediador.nome;
        this.sel('.jogador').textContent = jogador.nome;

        //informações de categoria e nome <-- 3 cartas
        for(let i = 0; i < 3; i++){
            this.sel('.categoria')[i].textContent = perfil.categoria;
            this.sel('.resposta')[i].textContent = perfil.nome;
        }
        // //dicas
        this.dicas = perfil.dicas;
    }

    //mostra a proxima tela
    showCartas()
    {
        this.sel('.cartas').style.display = '';
        this.sel('.players').style.display = 'none';
    }

    //gira a carta e mostra as dicas com o perfil
    cardFlip(el)
    {
        this.sel('.header')[1].textContent = 'Escolha um número';
        el.style.transform = "rotateY(180deg)";
        this.showDicas();
    }

    cardReset()
    {
        var c = this.sel('.dicas-flex');
        c.classList.add('anim');

        setTimeout(() => {
            c.innerHTML = '';
            this.clikar_cartas = true;
        }, 1900);

        this.sel('.flipper').forEach((el) =>{
            el.style.transform = "rotateY(0deg)";
        });
    }

    //cria as dicas
    showDicas(){
        var c = this.sel('.dicas-flex');
        c.classList.remove('anim');

        this.dicas.forEach((e, i) => {
         var el = `<div class="dica-item" data-dica="${e.texto}">${++i}</div>`;
         c.innerHTML += el;
     });

        c.addEventListener('click', (e) =>{
            if(e.target.classList.contains('dica-item') && !e.target.classList.contains('errada'))
                this.sel('.dicas-flex .dica-item').forEach((el) =>{
                    if(e.target === el) {
                        el.style.width =  '100%';
                        el.textContent = el.getAttribute('data-dica');
                        el.innerHTML += 
                        `<div class="controls">
                        <span data-type="e">
                        <img src="img/errado.png">
                        </span> 
                        <span data-type="c">
                        <img src="img/correto.png">
                        </span>
                        </div>`;
                    }else {
                       el.style.display =  'none';
                   }
                //configurando o click <-- lembrando que não é um handle, pois é temporario
                this.sel('.controls').onclick = (e) => {
                    var el = e.currentTarget.parentNode,
                    type = e.target.parentNode.getAttribute('data-type');
                    type === 'e' ? this.errada(el) : this.correta(el);
                }
            });
        });
    }

    fimPartida(){
        alert('jogo acabou, ganhou porra')
    }

    //atualiza as amostras das cias
    update(i){
        this.sel('.dicas-flex .dica-item').forEach((el, i) =>{
            el.style.width =  '80px';
            el.style.display =  '';
            el.innerHTML = ++i;
        })
    }
}
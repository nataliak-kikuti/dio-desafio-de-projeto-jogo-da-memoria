const cards = document.querySelectorAll('.card');
let hasFlippedcard = false;
let primeiraCarta, segundaCarta;
let bloqueiaTabuleiro = false;


function virarCarta(){
  if(bloqueiaTabuleiro) return;
  if(this === primeiraCarta) return;

  this.classList.add('flip');
  if(!hasFlippedcard){
    hasFlippedcard = true;
    primeiraCarta = this;
    return;
  }
  segundaCarta = this;
  hasFlippedcard = false;
  saoIguais();
}

function saoIguais(){
  if(primeiraCarta.dataset.card === segundaCarta.dataset.card){
    desabilitaCarta();
    return;
  }
  escondeCarta();
}

function desabilitaCarta(){
  primeiraCarta.removeEventListener('click',virarCarta)
  segundaCarta.removeEventListener('click',virarCarta)

  redefinirTabuleiro();
}

function escondeCarta(){
  bloqueiaTabuleiro = true;
  setTimeout(() =>{
    primeiraCarta.classList.remove('flip');
    segundaCarta.classList.remove('flip');
   
    redefinirTabuleiro();
  }, 1500)
}

function redefinirTabuleiro(){
  [hasFlippedcard, bloqueiaTabuleiro = [false, false]]
  [primeiraCarta, segundaCarta = [null,null]]
}

(function embaralhaCartas(){
  cards.forEach((card) => {
    let posisaoAleatoria = Math.floor(Math.random() * 12);
    card.style.order = posisaoAleatoria;
  })
})();

cards.forEach((card) => {
  card.addEventListener('click',virarCarta)
})
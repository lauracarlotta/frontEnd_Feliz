let banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
let bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 6000);

/* Botão de pause */

/* let timer = setInterval(trocaBanner, 6000);
let controle = document.querySelector('.pause');

controle.onclick = function() {
    if(controle.className == 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    } else {
        timer = setInterval (trocaBanner, 6000);
        controle.className = 'pause';
    }

    return false;
} */

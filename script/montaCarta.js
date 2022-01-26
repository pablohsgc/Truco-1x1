function montaCarta(simbolo,nipe,cor){ //Funcao para retornar um objeto carta contendo numero e simbolo para ser adicionado na pagina
    let div = '<div class="carta" id="card' + simbolo + nipe +'">';
    let simb_esq = `<div class="simb-esq-carta"><i class="num-carta ${cor}">${simbolo}</i><img class="nipe ${nipe}"/></div>`;
    let simb_dir = `<div class="simb-dir-carta"><i class="num-carta ${cor}">${simbolo}</i><img class="nipe ${nipe}"/></div>`;
    div += simb_esq + simb_dir + '</div>';
    return div;
}
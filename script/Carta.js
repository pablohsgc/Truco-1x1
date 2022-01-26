class Carta{
    constructor(simbolo,nipe,peso=0){
        this.simbolo = simbolo;
        this.nipe = nipe;
        this.peso = peso;
    }

    toString(){
        return "Carta:"+this.simbolo + " de " +this.nipe;
    }

    compara(carta){
        return this.peso - carta.peso;
    }
}
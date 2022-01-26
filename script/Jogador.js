class Jogador{
    constructor(mao=[]){
        this.mao = mao;
    }

    novaMao(mao){
        this.mao = mao;
    }

    lancaCarta(){ // Lança carta aleatória
        let indice = Math.floor(Math.random() * this.mao.length);
        let carta = this.mao.splice(indice,1);
        return carta[0];
    }
}
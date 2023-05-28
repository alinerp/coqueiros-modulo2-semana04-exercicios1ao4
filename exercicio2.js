class Conta {
    #saldo;
    #senha;
    constructor(saldo,senha){
        this.#saldo = saldo;
        this.#senha = senha;
    }
    deposito(valor,senha){
        if (senha === this.#senha) {
            this.#saldo += valor;
        } 
        console.log(this.#saldo)
    }
    retirada(valor){
        this.#saldo -= valor;
        console.log(this.#saldo)
    }
    
}

const conta1 = new Conta(100, 1234);
conta1.deposito(600, 1234);
conta1.retirada(200);



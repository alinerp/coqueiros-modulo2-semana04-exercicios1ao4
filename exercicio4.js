class Funcionario {
    #nome;
    #idade;
    #salario;

    constructor(nome){
        this.#nome = nome;
    }

    atualizaNome(nome) {
        this.#nome = nome;
    }
    atualizaIdade(idade) {
        this.#idade = idade;
    }
    atualizaSalario(salario) {
        this.#salario = salario;
    }

    mostraNome() {
        return this.#nome
    }
    mostraIdade() {
        return this.#idade
    }
    mostraSalario() {
        return this.#salario
    }
}

class Gerente extends Funcionario {
    #departamento;
    atualizaDepartamento(departamento) {
        this.#departamento = departamento
    }
    mostrarDepartamento() {
        return this.#departamento
    }
}

class Programador extends Funcionario {
    #linguagem;

    constructor(nome){
        super(nome)//super - construtor do funcionário
    }
    atualizarLinguagem(linguagem) {
        this.#linguagem = linguagem
    }
    mostrarLinguagem() {
        return this.#linguagem
    }
}

const gerente = new Gerente();
gerente.atualizaNome('Manuel')
gerente.atualizaIdade(48)
gerente.atualizaSalario(5000)
gerente.atualizaDepartamento('Marketing')

const programador = new Programador('Aline Passos', 30, 10000, 'JavaScript');

console.log(`Nome: ${programador.mostraNome()}`);


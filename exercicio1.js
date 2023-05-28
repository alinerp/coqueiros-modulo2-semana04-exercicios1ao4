class Person {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    imprimirDados(){
        console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura`);
    }
}
//sobreescrever
class PersonProfessional extends Person {
  constructor(nome, idade, altura, profissao) {
    super(nome, idade, altura);
    this.profissao = profissao;
  }
  imprimirDados() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this
.idade} anos, ${this.altura} de altura e trabalho como ${this.profissao}.`
    );
  }
}

const pessoa = new Person('Aline', 31, 1.6, 'Secretária');
pessoa.imprimirDados()

const profissional = new PersonProfessional('Aline', 31, 1.6, 'Secretária')
profissional.imprimirDados()



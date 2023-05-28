class CaixaRegistradora {
    constructor() {
      this.estoque = [];
      this.cliente = '';
      this.caixa = [];
    }
  
    adicionarProduto(codigoBarra, preco, nome) {
      const produto = {
        codigoBarra: codigoBarra,
        preco: preco,
        nome: nome,
        quantidade: 0
      };
      this.estoque.push(produto);
    }
  
    iniciarAtendimento(cliente) {
      this.cliente = cliente;
    }
  
    adicionarItem(codigoBarra, quantidade) {
      const produto = this.estoque.find(item => item.codigoBarra === codigoBarra);
      if (produto) {
        produto.quantidade += quantidade;
        this.caixa.push(produto);
      } else {
        console.log('Produto não encontrado no estoque.');
      }
    }
  
    calcularValorTotal() {
      let total = 0;
      for (const produto of this.caixa) {
        total += produto.preco * produto.quantidade;
      }
      return total;
    }
  
    fecharConta(dinheiro) {
      const total = this.calcularValorTotal();
      const troco = dinheiro - total;
      if (troco >= 0) {
        console.log(Cliente: ${this.cliente});
        console.log(Total da conta: R$${total.toFixed(2)});
        console.log(Dinheiro recebido: R$${dinheiro.toFixed(2)});
        console.log(Troco: R$${troco.toFixed(2)});
        this.caixa = [];
      } else {
        console.log('Dinheiro insuficiente para pagar a conta.');
      }
    }
  }
  
  // Exemplo de uso:
  const caixa = new CaixaRegistradora();
  caixa.adicionarProduto(1, 10.99, 'Caneta');
  caixa.adicionarProduto(2, 25.49, 'Caderno');
  caixa.iniciarAtendimento('João');
  caixa.adicionarItem(1, 2);
  caixa.adicionarItem(2, 1);
  console.log('Valor total:', caixa.calcularValorTotal());
  caixa.fecharConta(50)
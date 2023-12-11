class Funcionario {
    nome 
    salario 
    constructor (nome, salario) {
        this.nome = nome
        this.salario = salario
    }

}


class Gerente extends Funcionario {
    departamento
    constructor (nome, salario, departamento) {
        super(nome, salario)
        this.departamento = departamento
    }

ExibirInfo() {
    console.log(`${this.nome}, ${this.salario}, ${this.departamento}`)
}
}


class Vendedor extends Funcionario {
    PercentualComissao
    
    constructor(nome, salario, percentual) {
        super (nome, salario)
        this.PercentualComissao = percentual
    }

calcularSalario() {
    let salarionovo = this.salario * (1 + (this.PercentualComissao/100))
    return salarionovo
}


ExibirInfo() {
    console.log(`${this.nome}, ${this.salario}, ${this.PercentualComissao}, ${this.calcularSalario()}`)
}
}

let vendedor1 = new Vendedor('glauco', 1000, 10)
vendedor1.ExibirInfo()



class Produto {
    nome
    valor
    
    constructor (nome, valor) {
        this.nome = nome 
        this.valor = valor
    }
}


class Venda {
    produtos = []
    constructor(vendedor) {
        this.Vendedor = vendedor 
    }

adicionarProduto(nome, valor) {
    this.produtos.push(new Produto(nome, valor))
}

calcularTotal(){
    let valorTotal = 0
    for(let i= 0; i < this.produtos.length; i++) {
        valorTotal += this.produtos[i].valor
    }
    return valorTotal
}

finalizarVenda() {
    console.log(`Vendedor: ${this.Vendedor.nome}, Valor total da venda: ${this.calcularTotal()} R$`)
}

}


let venda1 = new Venda(vendedor1)
venda1.adicionarProduto('sabao', 5)
venda1.adicionarProduto('caneta', 5)
venda1.adicionarProduto('whisky', 100)

venda1.finalizarVenda()



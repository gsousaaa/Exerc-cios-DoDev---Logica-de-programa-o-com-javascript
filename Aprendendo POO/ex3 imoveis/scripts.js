class Pessoa {
    nome
    cpf
    data
}
class Imovel {
    moradores = [];
    #maxBanheiros;
    #banheiros
    constructor(endereco, cep, area, quartos, valor, maxBanheiros) {
        this.endereco = endereco;
        this.cep = cep;
        this.area = area;
        this.quartos = quartos;
        this.valor = valor;
        this.#maxBanheiros = maxBanheiros;
        this.#banheiros = 0;
    }

    setBanheiros(numBanheiros) {
        if (numBanheiros <= this.#maxBanheiros) {
            this.#banheiros = numBanheiros;
        } else {
            console.log(`Número de banheiros excede o máximo permitido (${this.#maxBanheiros}).`);
        }
    }

    getBanheiros() {
        return this.#banheiros;
    }

    adicionarMoradores(pessoa) {
        this.moradores.push(pessoa);
    }

    removerMoradores(nome) {
        this.moradores = this.moradores.filter((pessoa) => pessoa.nome !== nome);
    }

    calcularValor() {
        // Valor base é comum a todos os tipos de imóveis
        let valorTotal = this.valor;

        // Acréscimo de 30% no valor para casas com quintal
        if (this instanceof Casa && this.comQuintal) {
            valorTotal *= 1.3;
        }

        // Para apartamentos, adicione o valor do condomínio
        if (this instanceof Apartamento) {
            valorTotal += this.condominio;
        }

        return valorTotal;
    }
}

class Kitnet extends Imovel {
    constructor(endereco, cep, area, quartos, valor) {
        super(endereco, cep, area, quartos, valor, 2);
    }
}

class Apartamento extends Imovel {
    constructor(endereco, cep, area, quartos, valor, condominio) {
        super(endereco, cep, area, quartos, valor, 3);
        this.condominio = condominio;
    }
}

class Casa extends Imovel {
    constructor(endereco, cep, area, quartos, valor, comQuintal) {
        super(endereco, cep, area, quartos, valor, 5);
        this.comQuintal = comQuintal;
    }
}

// Exemplo de uso:
let pessoa1 = new Pessoa('glauco', 703, '09/12/2004');
let kitnet1 = new Kitnet('Rua ABC', 12345, 40, 2, 1000);
let apartamento1 = new Apartamento('Av. XYZ', 54321, 80, 1, 2000, 500);
let casa1 = new Casa('Rua 123', 98765, 120, 7, 3000, true);

kitnet1.setBanheiros(2); // Define o número de banheiros permitido
apartamento1.setBanheiros(4); // Excede o número de banheiros permitido

console.log(kitnet1.getBanheiros()); // 2
console.log(apartamento1.getBanheiros()); // 0 (devido à validação)

class Cliente {
    constructor(nome, cpf, data) {
        this.setNome(nome)
        this.setCpf(cpf)
        this.setData(data)
    }

    getNome() {
        return this.nome
    }

    setNome(nome) {
        if (nome.length <= 50) {
            this.nome = nome
        } else {
            console.error('O nome deve ter no máximo 50 caracteres!')
        }

    }

    getCpf() {
        return this.cpf
    }

    setCpf(cpf) {
        if (cpf.length <= 11) {
            this.cpf = cpf
        } else {
            console.error('o CPF deve ter no máximo 11 caracteres')
        }
    }


    getData() {
        return this.data
    }

    setData(data) {
        this.data = data
    }


}

class Voo {
    constructor(empresa, numero, data, horario, localPartida, localDestino) {
        this.setEmpresa(empresa)
        this.setNumero(numero)
        this.setData(data)
        this.setHorario(horario)
        this.setLocalPartida(localPartida)
        this.setLocalDestino(localDestino)
    }
    getEmpresa() {
        return this.empresa
    }

    setEmpresa(empresa) {
        this.empresa = empresa
    }

    getNumero() {
        return this.numero
    }

    setNumero(numero) {
        this.numero = numero
    }

    getData() {
        return this.data
    }

    setData(data) {
        this.data = data
    }

    getHorario() {
        return this.horario
    }

    setHorario(horario) {
        this.horario = horario
    }

    getLocalPartida() {
        return this.localPartida
    }

    setLocalPartida(localPartida) {
        this.localPartida = localPartida
    }

    getLocalDestino() {
        return this.localDestino
    }

    setLocalDestino(localDestino) {
        this.localDestino = localDestino
    }
}




class PassagemAerea {
    constructor(assento, primeiraClasse, valor, cliente, voo) {
        this.setAssento(assento)
        this.setPrimeiraClasse(primeiraClasse)
        this.setValor(valor)
        this.setPassageiro(cliente)
        this.setVoo(voo)
    }

    getAssento() {
        return this.assento
    }

    setAssento(assento) {
        this.assento = assento
    }

    getPrimeiraClasse() {
        return this.primeiraClasse
    }

    setPrimeiraClasse(primeiraClasse) {
        if (typeof primeiraClasse === 'boolean') {
            this.primeiraClasse = primeiraClasse
        } else {
            console.error('A variável primeiraClasse deve ter um valor  booleano')
        }
    }

    getValor(){
        return this.valor
    }

    setValor(valor) {
        this.valor = valor
    }

    getPassageiro(){
        return this.passageiro
    }

    setPassageiro(cliente) {
        this.passageiro = cliente
    }

    getVoo() {
        return this.voo
    }

    setVoo(voo) {
        this.voo = voo
    }

    calcularValor() {
        if (this.primeiraClasse == true) {
            let valorNovo = this.valor * 1.5
            return valorNovo
        } else {
            let valorNovo = this.valor
            return valorNovo
        }
    }


    exibirResumo() {
        console.log(`Passagem no nome de ${this.passageiro.getNome()}, no assento ${this.assento}, do voo ${this.voo.getNumero()} com destino para ${this.voo.getLocalDestino()}`)
    }
}


class PacoteViagem {
    constructor(cliente, passagemIda, passagemVolta, valorTotal) {
        this.titular = cliente
        this.passagemIda = passagemIda
        this.passagemVolta = passagemVolta
        this.valorTotal = valorTotal
    }
}



class SistemaViagem {
    constructor(){
        this.clientes = []
        this.voos = []
        this.pacotesViagens = []
    }

    cadastrarCliente(nome, cpf, data) {
        const novoCliente = new Cliente(nome, cpf, data)
        this.clientes.push(novoCliente)
        return novoCliente
    }

    cadastrarVoo(empresa, numero, data, horario, localPartida, localDestino){
        const novoVoo = new Voo(empresa, numero, data, horario, localPartida, localDestino)
        this.voos.push(novoVoo)
        return novoVoo
    }

    mostrarVoos() {
        for (const voo of this.voos) {
            console.log(`Voo ${voo.getNumero()} - ${voo.getEmpresa()}: ${voo.getLocalPartida()} -> ${voo.getLocalDestino()}`);
        }
    }


    cadastrarPacoteViagem(cliente, ida, volta) {
        if (!this.clientes.includes(cliente)) {
            console.error("Erro: O cliente não está cadastrado.");
            return null;
        }

        if (!this.voos.includes(ida.getVoo())) {
            console.error("Erro: O voo de ida não está cadastrado.");
            return null;
        }

        if (!this.voos.includes(volta.getVoo())) {
            console.error("Erro: O voo de volta não está cadastrado.");
            return null;
        }

        if (ida.getVoo().getLocalDestino() !== volta.getVoo().getLocalPartida()) {
            console.error("Erro: O local de destino do voo de ida não corresponde ao local de partida do voo de volta.");
            return null;
        }
        const valorTotal = ida.calcularValor() + volta.calcularValor()
        const pacoteViagem = new PacoteViagem(cliente, ida, volta, valorTotal)
        this.pacotesViagens.push(pacoteViagem)
        return pacoteViagem
        
    }

}

const sistemaViagem = new SistemaViagem()
const cliente1 = sistemaViagem.cadastrarCliente('glauco', '703', '09/12/2004')
const voo1 = sistemaViagem.cadastrarVoo('Gol', 1, '20/10/2023', '15:00', 'Natal', 'Rio')
const voo2 = sistemaViagem.cadastrarVoo('Latam', 2, '25/10/2023', '15:00', 'Rio', 'Natal')

sistemaViagem.mostrarVoos()
const ida = new PassagemAerea(2, true, 500, cliente1, voo1)
const volta = new PassagemAerea(3, false, 500, cliente1, voo2)


sistemaViagem.cadastrarPacoteViagem(cliente1, ida, volta)

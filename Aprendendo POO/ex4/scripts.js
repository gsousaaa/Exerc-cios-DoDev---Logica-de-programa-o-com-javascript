class Cliente {
    constructor(nome, cpf, data) {
       this.nome = nome
       this.cpf = cpf
       this.data = data
    }
   }
   
   class Voo {
   constructor(empresa, numero, data, horario, localPartida, localDestino) {
       this.empresa = empresa
       this.numero = numero 
       this.data = data
       this.horario = horario
       this.localPartida = localPartida
       this.localDestino = localDestino
   
   }
   }
   
   
   
   
   class PassagemAerea {
       constructor(assento, primeiraClasse, valor, cliente, voo) {
           this.assento = assento
           this.primeiraClasse = primeiraClasse
           this.valor = valor
           this.passageiro = cliente
           this.voo = voo
       }
   calcularValor() {
       if (this.primeiraClasse == true) {
           let valorNovo = this.valor * 1.5
           return valorNovo 
       } else {
          let valorNovo = this.valor
       }
   }
   
   
   exibirResumo() {
       console.log(`Passagem no nome de ${this.passageiro.nome}, no assento ${this.assento}, do voo ${this.voo.numero} com destino para ${this.voo.localDestino}`)
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
   
   
   
   let cliente1 = new Cliente('glauco', 703, '09/12/2004')
   let voo1 = new Voo('gol', 2, '20/10/2023', '15:00', 'natal', 'rio')
   let voo2 = new Voo('gol', 2, '25/10/2023', '15:00', 'rio', 'natal')
   let ida = new PassagemAerea(2, true, 500, cliente1, voo1)
   let volta = new PassagemAerea(3, false, 500, cliente1, voo2)
   
   let pacote1 = new PacoteViagem(cliente1, ida, volta, ida.calcularValor() + volta.calcularValor())
   
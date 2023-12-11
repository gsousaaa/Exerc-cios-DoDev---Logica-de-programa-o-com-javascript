class Livro {
    titulo
    autor
    editora
    ano
    dispo = true
    constructor(titulo, autor, editora, ano) {
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.ano = ano
    }
}



let livros = []
livros.push(new Livro('Pequeno principe', 'glauco', 'edebe', 2008))
livros.push(new Livro('Diario de um banana', 'greg heffley', 'edebe', 2010))



class Biblioteca {
    nome
    endereco
    telefone
    acervo = []
    constructor(nome, endereco, telefone, acervo) {
        this.nome = nome
        this.endereco = endereco, this.telefone = telefone, this.acervo = acervo

    }

    buscarLivro(titulo) {
        this.acervo.forEach(livro => {
            if (livro.titulo == titulo) {
                console.log(livro)
            }
        })

    }


    Emprestar(titulo) {
        let emprestado = false
        this.acervo.forEach(livro => {
            if (livro.titulo == titulo) {
                if (livro.dispo == true) {
                    livro.dispo = false
                    emprestado = true
                }
            }
        })

        if (emprestado) {
            return true
        } else {
            return false
        }
    }

    DevolverLivro(titulo) {
        this.acervo.forEach(livro => {
            if (livro.titulo == titulo) {
                livro.dispo = true
                console.log("Livro devolvido com sucesso.")
            }
        })
    }



}

let lib = new Biblioteca('domingos savio', 'av petra kelly', 8499, livros)
lib.buscarLivro('Pequeno principe')
lib.Emprestar('Pequeno principe')

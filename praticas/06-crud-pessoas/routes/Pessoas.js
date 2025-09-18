const express = require('express')
const router = express.Router()

let listaPessoas = [
    {
        id: 1,
        nome: "João",
        cpf: "123.456.789-00",
        email: "João@pedro.com",
        dataNascimento: "01/01/2000"
    },

    {
        id: 2,
        nome: "Maria",
        cpf: "987.654.321-00",
        email: "Maria@silva.com",
        dataNascimento: "02/02/1990"
    }
]

// Mapear as rotas
router.get('/pessoas', (req, res, next) => {
    res.json(listaPessoas)
})


router.get('/pessoas/:id', (req, res, next) => {
    // Recebendo o id como parâmetro direto na URL'
    const id = req.params.id
    // faça a busca na lista de pessoas
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    if(!pessoa){
        return res.status(404).json({error: "Pessoa não encontrada"})
    }
    res.json(pessoa)
})


// exportar a rota
module.exports = router
const express = require('express')
const router = express.Router()
const LivroModel = require('../models/Livro')

// validadores como Middlewares
const { validarNovoLivro } = require('../validators/LivroValidator')
const { validarID } = require('../validators/IDValidator')

// Rotas do CRUD
// Create
router.post('/livros', validarNovoLivro, async (req, res, next) => {
  const livro = req.body
  const livroCadastrado = await LivroModel.create(livro)
  res.status(201).json(livroCadastrado)
})

// Read
router.get('/livros', async (req, res, next) => {
    const livros = await LivroModel.find()
    res.json(livros)
})

router.get('/livros/:id', validarID, async (req, res, next) => {
    const id = req.params.id
    const livroEncontrato = await LivroModel.findById(id)
    if (!livroEncontrato) {
      return res.status(404).json({ erro: "Livro não encontrato!!!" })
    }
    res.json(livroEncontrato)
})

// Update
router.put('/livros/:id', validarID, async (req, res, next) => {
    const id = req.params.id
    const novoDados = req.body
    const livroAtualizado = await LivroModel.findByIdAndUpdate(id, novoDados, { new: true })
    if (!livroAtualizado) {
      return res.status(404).json({ erro: "Livro não econtrado" })
    }
    res.json(livroAtualizado)
})

// Delete
router.delete('/livros/:id', validarID, async (req, res, next) => {
    const id = req.params.id
    await LivroModel.findByIdAndDelete(id)
    res.status(204).send()
})

module.exports = router
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()

app.use(express.json())

// Connetar no banco Mongo
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)
    .then(() => {
        console.log("Conectado ao MongoDB")
    })
    .catch(err => {
        console.log("Erro ao conectar no banco MongoDB: ", err)
    })

// interface com o banco
const livroModel = mongoose.model('Livros', new mongoose.Schema(
    {
        titulo: String,
        autor: String,
        editora: String,
        ano: Number,
        preco: Number

    }
))

//CRUD
//Create
app.post('/livros', async(req, res, next) => {
    const livro = req.body
    if(!livro.titulo || !livro.autor){
        return res.status(400).send({error: "Os campos título e autor são obrigatórios"})
    }
   const livroCriado = await livroModel.create(livro)
    res.status(201).send(livroCriado)    
})

//Read
app.get('/livros', async(req, res, next) => {
    const livros = await livroModel.find()
    res.json(livros)
})


//UPDATE
app.put('/livros/:id', async(req, res, next) => {
    const id = req.params.id
    const livro = req.body
    if(!livro.titulo || !livro.autor){
        return res.status(400).send({error: "Os campos título e autor são obrigatórios"})
    }
    const livroAtualizado = await livroModel.findByIdAndUpdate(id, livro, {new: true})
    if(!livroAtualizado){
        return res.status(404).send({error: "Livro não encontrado"})
    }
    res.json(livroAtualizado)
})

//DELETE
app.delete('/livros/:id', async(req, res, next) => {
    const id = req.params.id
    await livroModel.findByIdAndDelete(id)
    res.json({
      message: "Tarefa excluída com sucesso"
    })
  })

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
  })
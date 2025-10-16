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
const tarefaModel = mongoose.model('Tarefas', new mongoose.Schema(
  {
    nome: String,
    
  }
))

//CRUD

//Create
app.post('/tarefas', async(req, res, next) => {
  const tarefa = req.body
  if(!tarefa.nome){
    return res.status(400).send({error: "O campo nome é obrigatório"})
  }
 const tarefaCriada = await tarefaModel.create(tarefa)
  res.status(201).send(tarefaCriada)    
})

//Read
app.get('/tarefas', async(req, res, next) => {
  const tarefas = await tarefaModel.find()
  res.json(tarefas)
})

//UPDATE
app.put('/tarefas/:id', async(req, res, next) => {
  const id = req.params.id
  const tarefa = req.body
  if(!tarefa.nome){
    return res.status(400).send({error: "O campo nome é obrigatório"})
  }
  const tarefaAtualizada = await tarefaModel.findByIdAndUpdate(id, tarefa, {new: true})
  if(!tarefaAtualizada){
    return res.status(404).send({error: "Tarefa não encontrada"})
  }
  res.json(tarefaAtualizada)
})

//DELETE
app.delete('/tarefas/:id', async(req, res, next) => {
  const id = req.params.id
  await tarefaModel.findByIdAndDelete(id)
  res.json({
    message: "Tarefa excluída com sucesso"
  })
})

app.listen(3000, () => {
  console.log("Aplicação rodando em http://localhost:3000")
})
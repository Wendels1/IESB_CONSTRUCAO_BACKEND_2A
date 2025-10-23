const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()


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


//Controladores e rota
const PessoaControle = require('./controllers/PessoaController')
app.use(PessoaControle)

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
})

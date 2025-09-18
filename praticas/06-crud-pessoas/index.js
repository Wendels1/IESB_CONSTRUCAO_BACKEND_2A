const express = require('express')
const app = express()

// configurar e mapea os intemediarios
const cors = require('cors')
app.use(cors())// habilitar CORS para browsers
app.use(express.json())// receber JSON no body

// mapear as rotas
const pessoasRouter = require('./routes/Pessoas')
app.use(pessoasRouter)


//Executar a aplicação
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})



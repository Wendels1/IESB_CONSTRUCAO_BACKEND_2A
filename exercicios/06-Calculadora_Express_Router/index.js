const express = require('express')
const app = express()

app.use((req, res, next) =>{
    console.log("___________*******_____________")
    console.log("Tempo ", new Date().toLocaleString())
    console.log("Metodo ", req.method)
    console.log("Rota ", req.url)
    next()
})
const calculadoraRouter = require('./routes/Calculadora.js')
app.use('/calculadora', calculadoraRouter)

app.listen(3000, () => {
    console.log("Aplicação rodando")
    
})
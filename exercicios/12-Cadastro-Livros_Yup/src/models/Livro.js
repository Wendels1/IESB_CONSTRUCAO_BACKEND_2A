const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    // estrutura do livro
    {
        titulo: { type: String, required: true },
        autor: { type: String, required: true },
        editora: { type: String },
        ano: { type: Number },
        preco: { type: Number, required: true },
    },
    // parametros
    // salva data de criação e a data de atualização do registro
    { timestamps: true }
)

// modelo
const LivroModel = mongoose.model('Livros', schema)
module.exports = LivroModel
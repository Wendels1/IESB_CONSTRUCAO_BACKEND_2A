const mongoose = require('mongoose');
const Schema = mongoose.Schema(
    {
        nome: { type: String, required: true },
        descricao: { type: String, required: true },
        salario: { type: Number, required: true },
    }
)
const CarroModel = mongoose.model('Carro', Schema);
module.exports = CarroModel;
const mongoose =  require('mongoose');
const Schema = mongoose.Schema(
    {
        nome: { type: String, required: true },
        descricao: [{ type: String, required: true }],
    }
)

const DepartamentoModel = mongoose.model('Departamento', Schema);
module.exports = DepartamentoModel;
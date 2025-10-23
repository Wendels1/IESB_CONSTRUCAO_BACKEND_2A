const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        cpf: { type: String, required: true },
        email: { type: String, required: true },
        telefone: { type: String, required: true },
        dataNascimento: { type: Date, required: true },
        genero: { type: String, required: true },
        endereco: { 
            cep: String ,
            logradouro: String,
            complemento: String,
            bairro: String,
            numero: String,
            uf: String
         },
    },
    //Parâmetro para criar os campos createdAt e updatedAt
    { timestamps: true }
)

//Modelo
const PessoaModel = mongoose.model('Pessoa', schema);

module.exports = PessoaModel;
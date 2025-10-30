const yup = require('yup');

const SchemaValidation = yup.object().shape(
    {
        titulo: yup.string().required("O título é obrigatório").min(3, "O título deve ter no mínimo 3 caracteres"),
        autor: yup.string().required("O autor é obrigatório").min(3, "O autor deve ter no mínimo 3 caracteres"),
        editora: yup.string().notRequired(),
        ano: yup.number().notRequired().min(0, "O ano deve ser um número positivo"),
        preco: yup.number().required("O preço é obrigatório").min(0, "O preço deve ser um número positivo"),
    }
);

async function validarNovoLivro(req, res, next) {
    try {
        await SchemaValidation.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
       return res.status(400).json({ error: error.errors });
    }
}

module.exports =  {
    validarNovoLivro
}
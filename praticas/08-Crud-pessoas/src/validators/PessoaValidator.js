const yup = require('yup');


const SchemaValidation = yup.object().shape(
    {
        nome: yup.string().required("O nome é obrigatório").min(3, "O nome deve ter no mínimo 3 caracteres"),
        cpf: yup.string().required("O CPF é obrigatório").matches(/^\d{11}$/, "O CPF deve conter 11 dígitos numéricos"),
        email: yup.string().required("O email é obrigatório").email("O email deve ser válido"),
        telefone: yup.string().notRequired().matches(/^\d{10,11}$/, "O telefone deve conter entre 10 e 11 dígitos numéricos"),
        dataNascimento: yup.date().required("A data de nascimento é obrigatória").max(new Date(), "A data de nascimento não pode ser no futuro"),
        genero: yup.string().required("O gênero é obrigatório").oneOf(["Masculino", "Feminino", "Outro"], "Gênero inválido"),       
    }
);

async function validatePessoa(res, req, next) {
    try {
        await SchemaValidation.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
       return res.status(400).json({ error: error.errors });
    }
}




module.exports =  {
    validatePessoa
}
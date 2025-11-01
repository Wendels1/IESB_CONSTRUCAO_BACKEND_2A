const yup =  require('yup');

const schema = yup.object().shape(
    {
        nome: yup.string().required("O Campo nome é obrigatorio"),
        descricao: yup.string().required("O Campo descricao é obrigatorio"),
        salario: yup.number()
        .min(0, "O campo salario deve ser maior ou igual a 0")
        .required("O Campo salario é obrigatorio"),
    }
)

async function validarCarro(dados){
    try {
        await schema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        return res.status(400).json({ errors: error.errors });
    }
}

module.exports = {
    validarCarro
}
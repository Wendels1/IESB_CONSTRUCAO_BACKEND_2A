const yup =  require('yup');

const schema = yup.object().shape(
    {
        nome: yup.string().required("O Campo nome é obrigatorio"),
        descricao: yup.string().required("O Campo descricao é obrigatorio"),
        

    }
)

async function validarDepartamentos(dados){
    try {
        await schema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        return res.status(400).json({ errors: error.errors });
    }
}

module.exports = {
    validarDepartamentos
}
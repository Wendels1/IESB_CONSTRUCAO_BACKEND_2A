const yup = require('yup');

const projetoSchema = yup.object().shape({
    nome: yup.string().required('O nome do projeto é obrigatório').min(3, 'O nome do projeto deve ter pelo menos 3 caracteres'),
    descricao: yup.string().required('A descrição do projeto é obrigatória').min(10, 'A descrição do projeto deve ter pelo menos 10 caracteres'),
    data_inicio: yup.date().required('A data de início do projeto é obrigatória'),
    data_fim: yup.date().min(
        yup.ref('data_inicio'),
        'A data de fim do projeto deve ser posterior à data de início'
    ).required('A data de fim do projeto é obrigatória'),
});

async function validarProjeto(req, res, next) {
    try {
        await projetoSchema.validate(req.body, { abortEarly: false });
        next();
    } catch (err) {
        return res.status(400).json({ erros: err.errors });
    }
}

const projetoAtualizarSchema = yup.object().shape({
    nome: yup.string().min(3, 'O nome do projeto deve ter pelo menos 3 caracteres'),
    descricao: yup.string().min(10, 'A descrição do projeto deve ter pelo menos 10 caracteres'),
    data_inicio: yup.date(),
    data_fim: yup.date().min(
        yup.ref('data_inicio'),
        'A data de fim do projeto deve ser posterior à data de início'
    ).notRequired(),
});

async function validarProjetoAtualizacao(req, res, next) {
    try {
        await projetoAtualizarSchema.validate(req.body, { abortEarly: false });
        next();
    } catch (err) {
        return res.status(400).json({ erros: err.errors });
    }
}

module.exports = { validarProjeto, validarProjetoAtualizacao };
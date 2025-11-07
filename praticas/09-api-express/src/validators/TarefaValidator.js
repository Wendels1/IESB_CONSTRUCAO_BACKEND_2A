const yup = require('yup');

const tarefaSchema = yup.object().shape({
    titulo: yup.string().required('O título da tarefa é obrigatório').min(3, 'O título da tarefa deve ter pelo menos 3 caracteres'),
    descricao: yup.string().required('A descrição da tarefa é obrigatória').min(10, 'A descrição da tarefa deve ter pelo menos 10 caracteres'),
    data_inicio: yup.date().required('A data de início da tarefa é obrigatória'),
    data_fim: yup.date().min(
        yup.ref('data_inicio'),
        'A data de fim da tarefa deve ser posterior à data de início'
    ).required('A data de fim da tarefa é obrigatória'),
    responsavel: yup.string().required('O responsável pela tarefa é obrigatório'),
    projeto: yup.string().required('O projeto da tarefa é obrigatório'),
});


async function validarTarefa(req, res, next) {
    try {
        await tarefaSchema.validate(req.body, { abortEarly: false });
        next();
    } catch (err) {
        return res.status(400).json({ erros: err.errors });
    }
}

const tarefaAtualizarSchema = yup.object().shape({
    titulo: yup.string().min(3, 'O título da tarefa deve ter pelo menos 3 caracteres'),
    descricao: yup.string().min(10, 'A descrição da tarefa deve ter pelo menos 10 caracteres'),
    data_inicio: yup.date(),
    data_fim: yup.date().min(
        yup.ref('data_inicio'),
        'A data de fim da tarefa deve ser posterior à data de início'
    ).notRequired(),
    responsavel: yup.string(),
    projeto: yup.string(),
});

async function validarTarefaAtualizacao(req, res, next) {
    try {
        await tarefaAtualizarSchema.validate(req.body, { abortEarly: false });
        next();
    } catch (err) {
        return res.status(400).json({ erros: err.errors });
    }
}

module.exports = { validarTarefa, validarTarefaAtualizacao };
const express = require('express');
const router = express.Router();

const TarefaModel = require('../models/TarefaModel');
const { validarId } = require('../validators/IDValidator');
const { validarTarefa, validarTarefaAtualizacao } = require('../validators/TarefaValidator');

router.get('/tarefas', async (req, res) => {
    const tarefas = await TarefaModel.find().populate('Funcionarios, Projetos');
    res.json(tarefas);
});

router.get('/tarefas/:id', validarId, async (req, res) => {
    const tarefa = await TarefaModel.findById(req.params.id).populate('Funcionarios, Projetos');
    if (!tarefa) {
        return res.status(404).json({ message: 'Tarefa não encontrada!' });
    }
    res.json(tarefa);
});

router.post('/tarefas', validarTarefa, async (req, res) => {
    const novaTarefa = await TarefaModel.create(req.body);
    res.status(201).json(novaTarefa);
});

router.put('/tarefas/:id', validarId, validarTarefaAtualizacao, async (req, res) => {
    const updatedTarefa = await TarefaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTarefa) {
        return res.status(404).json({ message: 'Tarefa não encontrada!' });
    }
    res.json(updatedTarefa);
});

router.delete('/tarefas/:id', validarId, async (req, res) => { 
    const deletedTarefa = await TarefaModel.findByIdAndDelete(req.params.id);
    if (!deletedTarefa) {
        return res.status(404).json({ message: 'Tarefa não encontrada!' });
    }
    res.status(204).send();
});

module.exports = router;
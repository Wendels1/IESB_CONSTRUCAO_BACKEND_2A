const express = require('express');
const router = express.Router();

const DepartamentoModel = require('../models/DepartamentoModel');
const { validarDepartamentos } = require('../validators/Departamentovalidator');

router.get('/departamentos', async (req, res) => {
    const departamentos = await DepartamentoModel.find();
    return res.json(departamentos);
});

router.get('/departamentos/:id', async (req, res) => {
    const departamentoEncontrado = await DepartamentoModel.findById(req.params.id);
    if(!departamentoEncontrado){
        return res.status(404).json({ error: "Departamento não encontrado" });
    }
    return res.json(departamentoEncontrado);
});

router.post('/departamentos', validarDepartamentos,  async (req, res) => {
    const departamentoCriado = await DepartamentoModel.create(req.body);
    return  res.status(201).json(departamentoCriado);
});

router.put('/departamentos/:id', validarDepartamentos, async (req, res) => {
   const departamentoAtualizado = await DepartamentoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if(!departamentoAtualizado){
         return res.status(404).json({ error: "Departamento não encontrado" });
    }
});

router.delete('/departamentos/:id', async (req, res) => {
    await DepartamentoModel.findByIdAndDelete(req.params.id);
    return res.status(204).send();
})

module.exports = router
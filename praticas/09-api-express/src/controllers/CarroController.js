const express = require('express');
const router = express.Router();

const CarroModel = require('../models/CarroModel');
const [validarCarro] = require('../validators/CarroValidator');

router.get('/carros', async (req, res) => {
    const carros = await CarroModel.find();
    return res.json(carros);
});

router.get('/carros/:id', async (req, res) => {
    const carroEncontrado = await CarroModel.findById(req.params.id);
    if(!carroEncontrado){
        return res.status(404).json({ error: "Carro não encontrado" });
    }
    return res.json(carroEncontrado);
})

router.post('/carros', validarCarro, async (req, res) => {
    const carroCriado = await CarroModel.create(req.body);
    return res.status(201).json(carroCriado);
});

router.put('/carros/:id', validarCarro, async (req, res) => {
    const carroAtualizado = await CarroModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if(!carroAtualizado){
        return res.status(404).json({ error: "Carro não encontrado" });
    }
})

router.delete('/carros/:id', async (req, res) => {
    await CarroModel.findByIdAndDelete(req.params.id);
    return res.status(204).send();
});


module.exports = router
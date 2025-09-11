const express = require('express');

const router = express.Router();

router.get('/somar', (req, res) => {
    // Number() converte string para número
    const numA = Number(req.query.numA);
    const numB = Number(req.query.numB);
    // implementação da soma...
    if(isNaN(numero01) || isNaN(numero02)){
        return res.status(400).json({error:"Valores inválidas"})
    }
    const resultado = numero01 + numero02
    res.json({resultado})
})
router.get('/subtracao', (req, res, next) => {
    const numero01 = parseFloat(req.query.numero01)
    const numero02 = parseFloat(req.query.numero02)
    if(isNaN(numero01) || isNaN(numero02)){
        return res.status(400).json({error:"Valores inválidas"})
    }
    const resultado = numero01 - numero02
    res.json({resultado})
})
router.get('/multiplicacao', (req, res, next) => {
    const numero01 = parseFloat(req.query.numero01)
    const numero02 = parseFloat(req.query.numero02)
    if(isNaN(numero01) || isNaN(numero02)){
        return res.status(400).json({error:"Valores inválidas"})
    }
    const resultado = numero01 * numero02
    res.json({resultado})
})
router.get('/divisao', (req, res, next) => {
    const numero01 = parseFloat(req.query.numero01)
    const numero02 = parseFloat(req.query.numero02)
    if(isNaN(numero01) || isNaN(numero02)){
        return res.status(400).json({error:"Valores inválidas"})
    }
    if(numero02 <= 0){
        return res.status(400).json({error:"Não é possivel dividir por 0"})
    }
    const resultado = numero01 / numero02
    res.json({resultado})
})
router.get('/quadrado', (req, res, next) => {
    const numero01 = parseFloat(req.query.numero01)
    if(isNaN(numero01)){
        return res.status(400).json({error:"Valores inválidas"})
    }
    const resultado = Math.pow(numero01, 2)
    res.json({resultado})
})
router.get('/raiz', (req, res, next) => {
    const numero01 = parseFloat(req.query.numero01)
    if(isNaN(numero01)){
        return res.status(400).json({error:"Valores inválidas"})
    }
    const resultado = Math.sqrt(numero01)
    res.json({resultado})
})

module.exports = router
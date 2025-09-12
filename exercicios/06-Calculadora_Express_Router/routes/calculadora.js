import express from 'express';
const router = express.Router();

router.get('/somar', (req, res) => {
    // Number() converte string para número
    const numA = Number(req.query.numA);
    const numB = Number(req.query.numB);
    // implementação da soma...
    const resultado = numA + numB;
    res.json({ resultado });
});

router.get('/subtrair', (req, res) => {
    const numA = Number(req.query.numA);
    const numB = Number(req.query.numB);
    // implementação da subtração...
    const resultado = numA - numB;
    res.json({ resultado });
});
router.get('/multiplicar', (req, res) => {
    const numA = Number(req.query.numA);
    const numB = Number(req.query.numB);
    // implementação da multiplicação...
    const resultado = numA * numB;
    res.json({ resultado });
});
router.get('/dividir', (req, res) => {
    const numA = Number(req.query.numA);
    const numB = Number(req.query.numB);
    // implementação da divisão...
    if (numB === 0) {
        return res.status(400).json({ error: "Divisão por zero não é permitida." });
    }
    const resultado = numA / numB;
    res.json({ resultado });
});

export default router;
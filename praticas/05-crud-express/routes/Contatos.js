const express = require('express');

const router = express.Router();





let contatos = ["João", "Maria"];

router.get('/contatos', (req, res) => {
    res.json(contatos);
});








module.exports = router;
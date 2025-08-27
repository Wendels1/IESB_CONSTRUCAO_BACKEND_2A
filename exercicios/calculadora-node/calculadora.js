function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        console.error("não tem como dividir por zero");
        return null;
    }
    return a / b;
}

function aoQuadrado(a) {
    return a * a;
}

function raizQuadrada(a) {
    if (a < 0) {
        console.error("não tem como calcular raiz quadrada de número negativo");
        return null;
    }
    return Math.sqrt(a);

}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    aoQuadrado,
    raizQuadrada
}
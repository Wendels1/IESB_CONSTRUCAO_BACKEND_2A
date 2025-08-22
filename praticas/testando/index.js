function calcularNotaA1 (exercicios, provas, trabalhos) {
    return exercicios+ provas + trabalhos 
  
  }
  
  function calcularNotaA2 (exercicios, provas, trabalhos) {
      return exercicios + provas + trabalhos 
  }
  
  // A função calcularNotaFinal deve receber as notas A1 e A2 e retornar a nota final
  function calcularNotaFinal (notaA1, notaA2) {
    return (notaA1 * 0.4) + (notaA2 * 0.6) 
  }
  
  module.export = {
    calcularNotaA1,
    calcularNotaA2,
    calcularNotaFinal
  }
  
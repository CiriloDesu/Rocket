/* ### Celcius para Fahrenheit
    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
    */
function transformTemp(temperatura) {
    const celsiusExists =temperatura.toUpperCase().includes('C')
    const fahrenheitExists = temperatura.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Escala de temperatura não identificada.')
    }
    // fluxo ideal, F -> C
    let temperaturaAtualizada = Number(temperatura.toUpperCase().replace('F', ''));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let tempSinal = 'C'
    //fluxo alternativo C -> F
    if(celsiusExists) {
    let temperaturaAtualizada = Number(temperatura.toUpperCase().replace('C', ''));
    let formula = (celsius) => celsius * 9/5 + 32
    let tempSinal = 'F'
    }
    return formula(temperaturaAtualizada) + tempSinal
}

try {
    console.log(transformTemp('50F'))
    //transformTemp('50Z')
} catch (error) {
    console.log(error.message)
}
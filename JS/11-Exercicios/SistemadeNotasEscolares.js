
// Tentativa sem ver resolução

let nota = 10
if (nota >= 90 && nota <= 100) {
    console.log('Nota A')
}
else if(nota >= 80 && nota <= 89){
    console.log('B')
}
else if(nota >= 70 && nota <= 79){
    console.log('C')
}
else if(nota >= 60 && nota <= 69){
    console.log('D')
}
else if (nota < 60 && nota >= 0){
    console.log('F')
}
else {
    console.log('nota inválida')
}

/*let nota = 4
let notaA = nota >= 90 && nota <= 100
let notaB = nota >= 90 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69
let notaF = nota < 60 && nota >= 0

let notaFinal;

if (notaA) {
    notaFinal = "A"
}
else if (notaB){
    notaFinal = "B"
}
else if (notaC){
    notaFinal = "C"
}
else if (notaD){
    notaFinal = "D"
}
else if (notaF){
    notaFinal = "F"
}
else {
    notaFinal = " Nota inválida"
}*/
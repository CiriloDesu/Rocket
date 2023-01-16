// Manipulando Strings e Array

// Separe um texto que contém espaços, em um novo array onde cada text oé uma posição do array. Depois disso, transforme o array em um texto e onde eram paços, coloque '_'

let phrase = "Eu quero viver o Amor!"

let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
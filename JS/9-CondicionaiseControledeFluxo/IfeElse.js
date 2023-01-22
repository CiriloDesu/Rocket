// if...else

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37
//sempre que for true o if entra em ação
//false = else


if(highTemperature) {
    console.log('Está com febre')
}

else if(mediumTemperature){
    console.log('febre média')
}
else (console.log('sem febre'))
// callback funcion

function sayMyName(name){
    console.log('antes de executar callback')
    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)
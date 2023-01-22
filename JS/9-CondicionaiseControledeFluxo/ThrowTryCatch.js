// throw

function sayMyName(name = '') {
    if (name === '') {
        throw 'nome é obrigatório'
    }

    console.log('depois do erro')
}

try {
    sayMyName()
}

catch(e) {
    console.log(e)
}
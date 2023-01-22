// switch
// sempre usar o break,se não todos os cases a partir entream em ação

let expression = 'b'
switch (expression) {
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default://caso não entre em nenhum dos casos acima, entra o default
        console.log('default')
        break
}
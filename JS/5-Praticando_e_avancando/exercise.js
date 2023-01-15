//1- Var weight
    //let weight
    //console.log(typeof weight)
//2- Que tipo de dado é a variável acima?
    //undefined

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer/inteiro)
    * stars: Number (float/flutuante)
    * isSubscribed: Boolean(booleano)
    */
  /* var name = 'Cirilo'
   var age = 20
   var stars = 2.5
   var isSubscribed = true*/

/* 4. A variável studen abaixo é de que tipo de dado?
    student = {}, object*/
    //4.1 Atribua a ela as mesma propriedades e valores do exercício 3.
    
    // 4.2 Mostre no console a seguinte mensagem:
    //<name> de idade <age> pesa <weight> kg.
    
    let student = {
        name: 'Cirilo',
        age: 20,
        weight: 2.5,
        isSubscribed: true
    }
    //console.log(student.name + 'de idade ' + student.age + ' pesa ' + student.weight + 'kg')
    //console.log(`${student.name} de idade ${student.age} e ${student.weight} kg `)

    //5. declarar um Array de nome students e atribuir a ela nenhum valor, ou seja, somente o Array vazio
        //const students = []
    
    //6. Retribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar/colar o objeto, mas usar o objeto criado e inserir ele no Array)
const students = [ 
        student,
        
    ]
      //console.log(students)
    //7. Coloque no console o valor da posição zero do Array acima
console.log(students[0])
    //8. Crie um novo student e coloque na posição 1 o Array students
    const gab = {
        name: 'Gab',
        age: 21,
        weight: 50.1,
        isSubscribed: false
    }
        /*students = [
        student,
        gab
        ]*/
    students[1] = gab
    console.log(students[1])

    //9. Sem rodar o código responda qual é a resposta do código abaixo e por que. Após a sua resposta, rode o código e veja se você acertou. 
        //vai ser indefinido, pois o VAR é global e local, sendo assim o JS entende que existe a variável, mas não identifica o que foi declarado. HOISTING(com let/const isso não acontece.)
    console.log(a)
    var a = 1
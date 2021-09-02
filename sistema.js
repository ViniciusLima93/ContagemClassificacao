 let numeroDeAlunos = 10;

 let contador = 0
 while (contador <= numeroDeAlunos) {
    if(contador === 0) {
         console.log('O numeo atual é ZERO')
     } else if (contador%2 === 0) {
       console.log('O número '+ contador + ' é par')
     } else{
         console.log('O número '+ contador + ' é ímpar')
     }
     contador = contador + 1
}
// for (let contador = 0; contador <= numeroDeAlunos; contador++) {
//     //console.log(contador)
    
//     if(contador === 0) {
//         console.log('O numeo atual é ZERO')
//     } else if (contador%2 === 0) {
//         console.log('O número '+ contador + ' é par')
//     } else{
//         console.log('O número '+ contador + ' é ímpar')
//     }
// }

 //let listaDeAlunos = ['Marcelo','Juh','Cleber','Wesley','Adriano']

// for (const aluno of listaDeAlunos) {
//     console.log(aluno)
// }
// listaDeAlunos.forEach(element => {
//     console.log(element)
// });
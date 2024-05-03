function verificarPar(numero) {
    return new Promise((resolve, reject) => {
        if(numero % 2 === 0) {
            resolve(`O número é par`)
        }else{
            reject(`o número é impar`)
        }
    })
}

let numero = prompt("Digite um número para sber se ele é par ou impar")

verificarPar(numero)

.then((mensagem) => {
    alert(mensagem)
})

.catch((error) => {
    alert(error)
})
// função sem retorno
function imprimirSoma(a, b)
{
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //Não da erro, mas não aparece valor
imprimirSoma(2, 10, 4, 3, 6, 7) //só pega os dois primeiros e ignora o resto

// Funcao com retorno
function soma(a, b = 0){
    return a+b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
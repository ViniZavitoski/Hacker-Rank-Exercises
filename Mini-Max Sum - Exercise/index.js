function minimaxSum(arr) {
    //ordena o array em ordem crescente
    const sortedArray = arr.slice().sort(function(a,b) {
        return a - b;
    });

    //calcula a soma mínima excluindo o elemento de índice 4 (o maior)
    const minSum = sortedArray.slice(0,4).reduce(function(acc,curr) {
        return acc + curr;
    }, 0);

    //calculando a soma maxima excluindo o elemento de indice 0
    const maxSum = sortedArray.slice(1).reduce(function(acc,curr) {
        return acc + curr;
    }, 0);
    
    //imprime os resultados:
    console.log(minSum + " " + maxSum);
}
//Exemplos de uso:
// const numeros = [1,2,3,4,5];
//miniMaxSum(numeros); Saída: 10 14
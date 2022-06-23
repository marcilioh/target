const readline = require('readline-sync');
const num = parseInt(readline.question('Entre com o numero para saber se pertence a sequência de Fibonacci: '));
var fib = [0,1];

function isFib(numero) {
    var i = 1;
    while(i<=numero){
        for(i = 2; i<= numero+1; i++){
            fib[i] = fib[i-2]+fib[i-1];
        }
    }
    return fib;
}
if (num<0){
    console.log("Valores menos do que 0 não são permitidos")
}
else{
    var arr = isFib(num);
    termo = arr.indexOf(num);
    if(termo === -1){
        console.log(`O numero ${num} não pertence a sequência de Fibonacci`);
    }else{
        console.log(`O numero ${num} é o termo ${(termo+1)} da sequência de Fibonacci`);
    }
}


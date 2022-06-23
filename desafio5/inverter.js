const readline = require('readline-sync');
const str = readline.question('Insira a string a ser invertida: ');
var temp = [];
var inv = '';

for(var i in str){
    temp.unshift(str[i]);
}

for(var i in temp){
    inv += temp[i];
}

console.log(inv);
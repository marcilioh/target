const fat = [
    {'Estado' : 'SP', valor : 67836.43, porcentagem : 0},
    {'Estado' : 'RJ', valor : 36678.66, porcentagem : 0},
    {'Estado' : 'MG', valor : 29229.88, porcentagem : 0},
    {'Estado' : 'ES', valor : 27165.48, porcentagem : 0},
    {'Estado' : 'Outros', valor : 19849.53, porcentagem : 0}
]

var total = 0;

for(let property in fat){
    total += fat[property].valor;
}

for(let property in fat){
    fat[property].porcentagem = fat[property].valor/total;

}

console.log(`O faturamento total mensal da distribuidora foi: ${total.toFixed(2)}`)
for(let property in fat){
    console.log(`${fat[property].Estado} representa ${fat[property].porcentagem.toFixed(2)*100}% do total mensal`)
}
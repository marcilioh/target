const dados = require("./dados.json");
var soma = 0, media = 0, dias = 0, menor = dados[0].valor, maior = 0, superior = 0;

for(i = 0; i<dados.length; i++){
    if(dados[i].valor != 0.0){
        soma = soma + dados[i].valor;
        dias++;
        if(dados[i].valor < menor){
            menor = dados[i].valor
        }
    }
    if(dados[i].valor > maior){
        maior = dados[i].valor;
    }
    

}

media = soma/dias;

for(i = 0; i<dados.length; i++){
    if(dados[i].valor > media){
        superior++;
    }
}

console.log(`Menor faturamento ocorrido em um dia do mês: ${menor.toFixed(2)}`);
console.log(`Maior faturamento ocorrido em um dia do mês: ${maior.toFixed(2)}`);
console.log(`Número de dias no mês em que o valor do faturamento diário foi superior à média mensal: ${superior.toFixed(2)}`);


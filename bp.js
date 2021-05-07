var valorSusana = prompt("Quanto combustível meteu a Susana? (€)");
var valorTotal = prompt("Qual foi o valor total sem desconto? (€)");
var valorFinal = prompt("Qual foi o preço final com desconto? (€)");

var valorDaniel = valorTotal-valorSusana;
console.log("O valor do Daniel foi "+valorDaniel.toFixed(2)+"€");

var percentagemSusana = (100*valorSusana)/valorTotal;
console.log("Percentagem Susana: "+percentagemSusana.toFixed(2)+"%");

var percentagemDaniel = (100*valorDaniel)/valorTotal;
console.log("Percentagem Daniel: "+percentagemDaniel.toFixed(2)+"%");

var contaSusana = (percentagemSusana*valorFinal)/100;
console.log("Conta da Susana: "+contaSusana.toFixed(2)+"€");

var contaDaniel = (percentagemDaniel*valorFinal)/100;
console.log("Conta do Daniel: "+contaDaniel.toFixed(2)+"€");


alert(
    "O valor do Daniel foi " + valorDaniel.toFixed(2)+ "€"
    +"\n"+
    "Percentagem Susana: " + percentagemSusana.toFixed(2)+"%"
    +"\n"+
    "Percentagem Daniel: " + percentagemDaniel.toFixed(2)+"%"
    +"\n"+
    "Conta da Susana: " + contaSusana.toFixed(2) + "€"
    +"\n"+
    "Conta do Daniel: " + contaDaniel.toFixed(2) + "€"
);
var valorSusana = prompt("Quanto combustível meteu a Susana? (€)");
var valorTotal = prompt("Qual foi o valor total sem desconto? (€)");
var valorFinal = prompt("Qual foi o preço final com desconto? (€)");

var valorDaniel = valorTotal-valorSusana;
var percentagemSusana = (100*valorSusana)/valorTotal;
var percentagemDaniel = (100*valorDaniel)/valorTotal;
var contaSusana = (percentagemSusana*valorFinal)/100;
var contaDaniel = (percentagemDaniel*valorFinal)/100;

alert(
    "O Daniel meteu:" + valorDaniel.toFixed(2)+ "€"
    +"\n"+
    "Percentagem Susana: " + percentagemSusana.toFixed(2)+"%"
    +"\n"+
    "Percentagem Daniel: " + percentagemDaniel.toFixed(2)+"%"
    +"\n"+
    "Susana paga: " + contaSusana.toFixed(2) + "€"
    +"\n"+
    "Daniel paga: " + contaDaniel.toFixed(2) + "€"
);
var valor1 = prompt("Quanto combustível meteu Condutor 1? (€)");
var valorTotal = prompt("Qual foi o valor total sem desconto? (€)");
var valorFinal = prompt("Qual foi o preço final com desconto? (€)");

var valor2 = valorTotal-valor1;
var percentagem1 = (100*valor1)/valorTotal;
var percentagem2 = (100*valor2)/valorTotal;
var conta1 = (percentagem1*valorFinal)/100;
var conta2 = (percentagem2*valorFinal)/100;

alert(
    "A Condutor 1 meteu: " + valor1 + "€"
    +"\n"+
    "O Condutor 2 meteu: " + valor2.toFixed(2) + "€"
    +"\n\n"+
    "Percentagem Condutor 1: " + percentagem1.toFixed(2) + "%"
    +"\n"+
    "Percentagem Condutor 2: " + percentagem2.toFixed(2) + "%"
    +"\n\n"+
    "Condutor 1 paga: " + conta1.toFixed(2) + "€"
    +"\n"+
    "Condutor 2 paga: " + conta2.toFixed(2) + "€"
);

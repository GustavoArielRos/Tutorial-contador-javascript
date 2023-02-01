
/*"style.diplay = none " para começar vazio algo*/


document.getElementById("valor-calculado").style.display = "none";/*esvaziar ele sempre quando iniciado */
document.getElementById("each").style.display = "none";

/* criar a função que aciona esse elementos de cima */
function calculateDinner(){
    var totalConta = document.getElementById("total-conta").value;/*colocando na variavel o valor que for escrito nessa id "total-conta" */
    var taxaServico = document.getElementById("taxa-servico").value;
    var numeroPessoas = document.getElementById("numero-pessoas").value;


    /*impedir que o usuário consiga usar símbolos proíbidos */
    /* "===" para tecla "==" para número */
    /*"NaN"(not a number) função do java que verifica se é numero a variável */
    if(totalConta === "" || taxaServico == 0 || isNaN(totalConta) || isNaN(numeroPessoas)){
        alert("Por favor, colo que um valor válido!");
        return;
    }

    /*caso o numero de pessoas venha errado */
    if(numeroPessoas === "" || numeroPessoas <= 1){
        numeroPessoas = 1;
        document.getElementById("each").style.display == "none"
    } else{
        document.getElementById("each").style.display = "block"
    }
    
    /*a parte das contas */
    var totalTaxaServico = (totalConta * taxaServico) /numeroPessoas;
    var total = totalTaxaServico + (totalConta / numeroPessoas);

    total = Math.round(total * 100) / 100; /*"math.round" (arrendoda o valor) */
    total = total.toFixed(2); /*escolher o número de casas decimais */

    document.getElementById("valor-calculado").style.display = "block";
    document.getElementById("valor-por-cabeca").innerHTML = total; /*recebe o conteúdo de um elemento HTML*/
}

/*"onclick" quando o botão dessa id for cliclada */
/* "=function()" pegar uma função quando for clicada */
document.getElementById("calcular").onclick = function(){
    calculateDinner();
}
var minhaEscolha = prompt("Jo queeeeemmm pô!? pedra, papeu ou tesoura?");

var EscolhaRandom = Math.random();



if (EscolhaRandom < 0.34) {

	EscolhaRandom = "pedra";

} else if(EscolhaRandom <= 0.67) {

	EscolhaRandom = "papel";

} else {

	EscolhaRandom = "tesoura";

} 

alert("Minha escolha é: " + EscolhaRandom);



var joquempo = function(escolha1, escolha2) {

    if (escolha1 === escolha2)

    	return ("EMPATAMOS! COMO É POSSÍVEL?!")

    else if (escolha1 === "pedra") {

        if (escolha2 === "tesoura")

        return ("PERDI! PORCARIA! :(");

        else {

            return ("VENCI, HUMANO BOCÓ!");

        }

    }

    else if (escolha1 === "papel") {

        if (escolha2 === "pedra")

        		return ("PERDI! PORCARIA! :(")

        else {

            return ("VENCI, HUMANO BOCÓ!");

        }

    }

    else if (escolha1 === "tesoura") {

        if (escolha2 === "pedra")

        		return ("VENCI, HUMANO BOCÓ!");

        else {

            return ("PERDI! PORCARIA! :(");

        }

    }

};


var resposta = joquempo(minhaEscolha,EscolhaRandom)
alert(resposta)
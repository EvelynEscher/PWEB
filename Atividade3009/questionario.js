const pessoa = [
	{
		sexo: 'F',
		idade: 10,
		opniao: 3
	},
	{
		sexo: 'M',
		idade: 15,
		opniao: 3
	},
	{
		sexo: 'F',
		idade: 30,
		opniao: 3
	},
	{
		sexo: 'F',
		idade: 40,
		opniao: 3
	},
	{
		sexo: 'M',
		idade: 50,
		opniao: 3
	},
	{
		sexo: 'M',
		idade: 50,
		opniao: 3
	},
	{
		sexo: 'M',
		idade: 50,
		opniao: 3
	},
	{
		sexo: 'M',
		idade: 50,
		opniao: 3
	}

]

var idadeMaisVelho = 0;
var idadeMaisNovo = 0;
var mulher = 0;
var homem = 0;
var somaIdadeMedia = 0;

for(var i = 0; i < pessoa.length; i++){

	if(idadeMaisVelho < pessoa[i].idade)
		idadeMaisVelho === parseInt(pessoa[i].idade);


	if(pessoa[i].sexo === 'M'){
		homem++;
	}else{
		mulher++;
	}

	somaIdadeMedia += pessoa[i].idade;
	
}
	somaIdadeMedia = (somaIdadeMedia/pessoa.length);

	console.log(mulher);
	console.log(homem);
	console.log(idadeMaisVelho);
	console.log(idadeMaisNovo);
	console.log(pessoa.length);
	console.log(somaIdadeMedia);
	

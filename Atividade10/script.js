function validarDados() {
            
	// usando a posicao no formulario
	if (document.forms.formulario1.elements[0].value == "" || document.forms.formulario1.elements[0].length < 3) {
		 alert("Preencha campo NOME corretamente!");
		 document.forms.formulario1.elements[0].focus();
		 return false;
	};

	// usando o nome no formulario
	if (document.forms.formulario1.elements["idEmail"].value == "" || document.forms.formulario1.elements["idEmail"].value.indexOf('@') == -1 || document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
		 alert("Preencha campo E-MAIL corretamente!");
		 document.forms.formulario1.elements.idEmail.focus();
		return false;
	}

	//usando o nome no formulario  de maneira direta
	if (document.forms.formulario1.elements.idMensagem.value == "" || document.forms.formulario1.elements.idMensagem.value.length < 50) {
		 alert("É necessario preencher o campo MENSAGEM com mais de 50 caracteres!");
		 document.getElementById("idMensagem").focus();
		 return false;
	}

	return true;
}
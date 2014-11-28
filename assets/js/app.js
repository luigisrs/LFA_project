//Declaración de variables
	var X = [0,0,0,0,0,0,0,0,0,0];
	var Y = [0,0,0,0,0,0,0,0,0,0];
	var Z = [0,0,0,0,0,0,0,0,0,0];
	//esta variable incluye la referencia etiqueta/lineaEnElTexto. Ejemplo:
	//labels[2] = 4
	//La etiqueta C se encuentra en la linea 5 del código
	//var labels = [];

//here's where all the hot fuzz happens :D
$( document ).ready(function() {
	
	function letterToNumber(label){
		var n = label.charCodeAt(0)-65;
		return n;
	}
	// Esta función ejecuta instrucciones en las tablas del tipo "X9++"
	function runInstruction(lineOfText){
		//get the label
		var varLoc = lineOfText.slice(0, 2);
		var varLetter = lineOfText.slice(0, 1);
		var varPosition = parseInt(lineOfText.slice(1, 2)); //parseInt por que es un string y se convierte a int
		var varOperator = lineOfText.slice(2, 4);

		switch(varLetter) {
			case "X":
				if(varOperator === "++"){
					X[varPosition]++;
				}
				if(varOperator === "--"){
					X[varPosition]--;
				}
				$("#"+varLoc).addClass('success');
				$("#"+varLoc).text(X[varPosition]);
			break;
			case "Y":
				if(varOperator === "++"){
					Y[varPosition]++;
				}
				if(varOperator === "--"){
					Y[varPosition]--;
				}
				$("#"+varLoc).addClass('success');
				$("#"+varLoc).text(Y[varPosition]);
			break;
			case "Z":
				if(varOperator === "++"){
					Z[varPosition]++;
				}
				if(varOperator === "--"){
					Z[varPosition]--;
				}
				$("#"+varLoc).addClass('success');
				$("#"+varLoc).text(Z[varPosition]);
			break;
		}		
	}

	//obteniendo las lineas del textarea
	$( "#run" ).click(function() {
		//separando el contenido del textArea en array lines.
		var lines = $('#code').val().split('\n');

		for(var i = 0;i < lines.length; i++){
			//evaluando si es un IF
			if(lines[i].slice(0, 2) === "IF"){
				//console.log( 'This string has an IF' );
			}
			//evaluando si es una etiqueta
			if(lines[i].slice(1, 2) === ":"){
				//console.log( 'This string has a TAG' );
			}
			//else, run this code
			else{
				runInstruction(lines[i]);
			}
		}    	
	});

	
	//cleanup button
	$( "#cleanup" ).click(function() {
		$(".valueCell").text("0");
		for (var i = 0; i < X.length; i++) { 
		   X[i]=0;
		   Y[i]=0;
		   Z[i]=0;
		}
		$("td").removeClass('success');
	});
	
});



//Declaración de variables
	var X = [0,0,0,0,0,0,0,0,0,0];
	var Y = [0,0,0,0,0,0,0,0,0,0];
	var Z = [0,0,0,0,0,0,0,0,0,0];
	//esta variable incluye la referencia etiqueta/lineaEnElTexto. Ejemplo:
	//globalLabels[2] = 4
	//La etiqueta C se encuentra en la linea 4 del código, si el espacio es cero, significa que no hay etiqueta.
	var globalLabels = [];


//here's where all the hot fuzz happens :D
$( document ).ready(function() {
	
	//esta funcion hace algo extraño para que el string "A" sea igual a 1, "B"=2, etc...
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
					console.log('X'+varPosition+' was ++');
				}
				if(varOperator === "--"){
					X[varPosition]--;
					console.log('X'+varPosition+' was --');
				}
				$("#"+varLoc).addClass('success');
				$("#"+varLoc).text(X[varPosition]);
			break;
			case "Y":
				if(varOperator === "++"){
					Y[varPosition]++;
					console.log('Y'+varPosition+' was ++');
				}
				if(varOperator === "--"){
					Y[varPosition]--;
					console.log('Y'+varPosition+' was --');
				}
				$("#"+varLoc).addClass('success');
				$("#"+varLoc).text(Y[varPosition]);
			break;
			case "Z":
				if(varOperator === "++"){
					Z[varPosition]++;
					console.log('Z'+varPosition+' was ++');
				}
				if(varOperator === "--"){
					Z[varPosition]--;
					console.log('Z'+varPosition+' was --');
				}
				$("#"+varLoc).addClass('success');
				$("#"+varLoc).text(Z[varPosition]);
			break;
		}		
	}
	//esta funcion ejecuta instrucciones con etiquetas
	function runLabel(lineOfText,lineNumber){
		//getting label and saving as integer
		var labelNumber = letterToNumber(lineOfText.slice(0, 1));
		//asignando al label array
		globalLabels[labelNumber] = lineNumber;
		//running instruction
		runInstruction(lineOfText.slice(2, 6));
		//consoleLogging Label
		console.log( 'The label ' + lineOfText.slice(0, 1) + " was saved on line " + lineNumber +" and the array is globalLabels["+labelNumber+"]="+lineNumber);
	}
	//esta funcion ejecuta instrucciones con condicionales
	function runCondition(lineOfText, lineNumber){
		//obteniendo variable
		var varLetter = lineOfText.slice(3,4);
		var varPosition = parseInt(lineOfText.slice(4, 5));	
		//transformando valor GOTO
		var label = lineOfText.slice(13, 14);
		var label = letterToNumber(label); //this slices and converts to number
		console.log('label to search is: '+label);
		//evaluando si existe la etiqueta
		if (typeof globalLabels[label] === 'undefined') {
			console.log('loc undefined');
			return lineNumber;
		}
		console.log('passed if undefined, line is '+globalLabels[label]);
		//evaluando variable
		console.log(varLetter)
		switch(varLetter) {
			case "X":
				console.log(X[varPosition]);
				if(X[varPosition] === 0){
					return globalLabels[label];
				}else{
					return lineNumber;
				}
			break;
			case "Y":
				if(Y[varPosition] === 0){
					return globalLabels[label];
				}else{
					return lineNumber;
				}
			break;
			case "Z":
				if(Z[varPosition] === 0){
					return globalLabels[label];
				}else{
					return lineNumber;
				}
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

				console.log('pre-if iValue = '+i);
				i = runCondition(lines[i], i);
				console.log('post-if iValue = '+i);
			}
			//evaluando si es una etiqueta
			if(lines[i].slice(1, 2) === ":"){
				runLabel(lines[i],i);
			}
			//else, run this code
			else{
				runInstruction(lines[i]);
			}
		}    	
	});
	
	//cleanup button
	$("#cleanup").click(function() {
		$(".valueCell").text("0");
		for (var i = 0; i < X.length; i++) { 
		   X[i]=0;
		   Y[i]=0;
		   Z[i]=0;
		}
		$("td").removeClass('success');
	});
	
});



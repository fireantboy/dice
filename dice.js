function rollDice(){
	var numberOfDice = Number(document.getElementById('numberOfDice').value);
	console.log('quanity of dice is '+ numberOfDice);
	var typeOfDice = Number(document.querySelector("select").value);
	console.log('type of die you are using is a ' + typeOfDice);
	var modifier = document.getElementById("modifiers").value;
	console.log('your modifier is ' + modifier);
	// var result = numberOfDice * typeOfDice + modifiers; 
	var operation;
	console.log("charAt(0) = " + modifier.charAt(0));
	if(modifier.charAt(0) == '+'){
		operation = '+';
	}else{
		operation = '-';
	}
	var modifierNumber = Number(modifier.slice(1));
	console.log('your operation is ' + operation);
	console.log('your number is ' + modifierNumber);
	var finalNumber = 0;
	for(var i=0; i < numberOfDice; i++){
		finalNumber = finalNumber + Math.floor((Math.random() * typeOfDice) + 1);
	}

	if(operation === '+'){
		finalNumber = finalNumber + modifierNumber;  
	}else{
		finalNumber = finalNumber - modifierNumber;  
	}
	console.log('the final number is ' + finalNumber);
}

document.querySelector('button').addEventListener("click", rollDice);
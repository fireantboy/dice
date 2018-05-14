function rollDice(){
	var numberOfDice = document.getElementById('numberOfDice').value;
	console.log('quanity of dice is '+ numberOfDice);
	var typeOfDice = document.querySelector("select").value;
	console.log('type of die you are using is a ' + typeOfDice);
	var modifiers = document.getElementById("modifiers").value;
	console.log('your modifier is ' + modifiers);
}

document.querySelector('button').addEventListener("click", rollDice);
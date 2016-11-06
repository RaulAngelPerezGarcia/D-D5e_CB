/**
Here we write all the logic needed for the page to work
*/
update();


// Here all the Base values are calculated
function incBase(idTag){
	var base = +document.getElementById('disp'+idTag).value;
	var costStat = calcCost(base);
	var costStatp1 = calcCost(base);

	if (base <= 14){
			var newBase = base + +1;
			document.getElementById('disp' + idTag).value = newBase;
			var cost = calcCost(newBase);
			document.getElementById('cost' + idTag).value = cost;
			calculateAll(idTag)
			remaining();
	}

}

function decBase(idTag){
	var base = +document.getElementById('disp'+idTag).value;
	if (base >= 9){
		var newBase = base - +1;
		document.getElementById('disp' + idTag).value = newBase;
		var cost = calcCost(newBase);
		document.getElementById('cost' + idTag).value = cost;
		calculateAll(idTag)
		remaining();
	}
}

// This function handles the remaining points 
function remaining(){
	var remp = +27 - +totalCost()
	document.getElementById('remp').value = +remp;
	return remp;
}

function totalCost(){
	var totCost = +document.getElementById('costStr').value 
		+ +document.getElementById('costDex').value 
		+ +document.getElementById('costCon').value 
		+ +document.getElementById('costInt').value 
		+ +document.getElementById('costWis').value 
		+ +document.getElementById('costCha').value;
	return +totCost;
}


// Sets the racial bonuses for each id
function selectedRace(id, textIn){

	if (id == "human"){
		document.getElementById('racialStr').value = 1;
		document.getElementById('racialDex').value = 1;
		document.getElementById('racialCon').value = 1;
		document.getElementById('racialInt').value = 1;
		document.getElementById('racialWis').value = 1;
		document.getElementById('racialCha').value = 1;		
	} else if (id == "dwarfHill"){
		document.getElementById('racialStr').value = 0;
		document.getElementById('racialDex').value = 0;
		document.getElementById('racialCon').value = 2;
		document.getElementById('racialInt').value = 0;
		document.getElementById('racialWis').value = 1;
		document.getElementById('racialCha').value = 0;		
	} else if (id == "dwarfMountain"){
		document.getElementById('racialStr').value = 2;
		document.getElementById('racialDex').value = 0;
		document.getElementById('racialCon').value = 2;
		document.getElementById('racialInt').value = 0;
		document.getElementById('racialWis').value = 0;
		document.getElementById('racialCha').value = 0;		
	} else if (id == "elfHigh"){
		document.getElementById('racialStr').value = 0;
		document.getElementById('racialDex').value = 2;
		document.getElementById('racialCon').value = 0;
		document.getElementById('racialInt').value = 1;
		document.getElementById('racialWis').value = 0;
		document.getElementById('racialCha').value = 1;		
	} else if (id == "elfWood"){
		document.getElementById('racialStr').value = 0;
		document.getElementById('racialDex').value = 2;
		document.getElementById('racialCon').value = 0;
		document.getElementById('racialInt').value = 0;
		document.getElementById('racialWis').value = 1;
		document.getElementById('racialCha').value = 0;		
	} else if (id == "elfDrow"){
		document.getElementById('racialStr').value = 0;
		document.getElementById('racialDex').value = 2;
		document.getElementById('racialCon').value = 0;
		document.getElementById('racialInt').value = 0;
		document.getElementById('racialWis').value = 0;
		document.getElementById('racialCha').value = 1;		
	} else if (id == "halflingLightfoot"){
		document.getElementById('racialStr').value = 0;
		document.getElementById('racialDex').value = 2;
		document.getElementById('racialCon').value = 0;
		document.getElementById('racialInt').value = 0;
		document.getElementById('racialWis').value = 0;
		document.getElementById('racialCha').value = 1;		
	} else if (id == "halflingStout"){
		document.getElementById('racialStr').value = 0;
		document.getElementById('racialDex').value = 2;
		document.getElementById('racialCon').value = 1;
		document.getElementById('racialInt').value = 0;
		document.getElementById('racialWis').value = 0;
		document.getElementById('racialCha').value = 0;		
	} else if (id == "dragonborn"){
		document.getElementById('racialStr').value = 2;
		document.getElementById('racialDex').value = 0;
		document.getElementById('racialCon').value = 0;
		document.getElementById('racialInt').value = 0;
		document.getElementById('racialWis').value = 0;
		document.getElementById('racialCha').value = 1;		
	} else if (id == "gnomeForest"){
		document.getElementById('racialStr').value = 0;
		document.getElementById('racialDex').value = 1;
		document.getElementById('racialCon').value = 0;
		document.getElementById('racialInt').value = 2;
		document.getElementById('racialWis').value = 0;
		document.getElementById('racialCha').value = 0;		
	} else if (id == "gnomeRock"){
		document.getElementById('racialStr').value = 0;
		document.getElementById('racialDex').value = 0;
		document.getElementById('racialCon').value = 1;
		document.getElementById('racialInt').value = 2;
		document.getElementById('racialWis').value = 0;
		document.getElementById('racialCha').value = 0;		
	} else if (id == "halfElf"){
		document.getElementById('racialStr').value = 2;
		document.getElementById('racialDex').value = 0;
		document.getElementById('racialCon').value = 0;
		document.getElementById('racialInt').value = 0;
		document.getElementById('racialWis').value = 0;
		document.getElementById('racialCha').value = 1;		
	} else if (id == "halfOrc"){
		document.getElementById('racialStr').value = 2;
		document.getElementById('racialDex').value = 0;
		document.getElementById('racialCon').value = 1;
		document.getElementById('racialInt').value = 0;
		document.getElementById('racialWis').value = 0;
		document.getElementById('racialCha').value = 0;		
	} else if (id == "tiefling"){
		document.getElementById('racialStr').value = 0;
		document.getElementById('racialDex').value = 0;
		document.getElementById('racialCon').value = 0;
		document.getElementById('racialInt').value = 1;
		document.getElementById('racialWis').value = 0;
		document.getElementById('racialCha').value = 2;		
	} else{
		document.getElementById('racialStr').value = 0;
		document.getElementById('racialDex').value = 0;
		document.getElementById('racialCon').value = 0;
		document.getElementById('racialInt').value = 0;
		document.getElementById('racialWis').value = 0;
		document.getElementById('racialCha').value = 0;	
	}
	console.log(textIn);
	dropdown(textIn, 'raceButton');
	update();
}


// Select the id function
function selectedClass(id, textIn){
	var hitDie
	var primaryAbility
	var savingThrows
	var proficiencies
	dropdown(textIn, 'classButton');
}


//This function sets the name of the dropdown to the selected token
function dropdown(val, name) {
	var y = document.getElementsByName(name);
	var aNode = y[0].innerHTML = val + ' <span class="caret"></span>'; // Append 
}



function update(){
	calculateAll('Str');
	calculateAll('Dex');
	calculateAll('Con');
	calculateAll('Int');
	calculateAll('Wis');
	calculateAll('Cha');
};

function calculateAll(idTag){
	calcScore(idTag);
	calcMod(idTag);
	document.getElementById('cost'+idTag).value = calcCost(document.getElementById('disp'+idTag).value);
	remaining();
}


// Here all the Scores values are calculated
function calcScore(idTag){
	var base = document.getElementById('disp'+idTag).value;
	var racial = document.getElementById('racial'+idTag).value;
	document.getElementById('score' + idTag).value =  +base + +racial;
}


// Here all the Modifiers values are calculated
function calcMod(idTag){
	var score = document.getElementById('score'+idTag).value;
	var modifier;
	modifier = Math.floor((score/2)-5)
	if (modifier>0){
		document.getElementById('modifier'+idTag).value = '+' + modifier;
	}else{
		document.getElementById('modifier'+idTag).value = modifier;	
	}
}


function calcCost(number){
	var cost = 50;
	if (number == 8){
		cost = 0;
	}else if( number == 9){
		cost = 1;
	}else if( number == 10){
		cost = 2;
	}else if( number == 11){
		cost = 3;
	}else if( number == 12){
		cost = 4;
	}else if( number == 13){
		cost = 5;
	}else if( number == 14){
		cost = 7;
	}else if( number == 15){
		cost = 9;
	}else {
		cost = 27
	}
	return cost;
}


function clearing(){
	selectedRace("none","Choose a race");
	selectedClass("none","Choose a class");
	document.getElementById('disp' + 'Str').value = 8;
	document.getElementById('disp' + 'Dex').value = 8;
	document.getElementById('disp' + 'Con').value = 8;
	document.getElementById('disp' + 'Int').value = 8;
	document.getElementById('disp' + 'Wis').value = 8;
	document.getElementById('disp' + 'Cha').value = 8;
	update();
};
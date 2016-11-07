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

};

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
};

// This function handles the remaining points 
function remaining(){
	var remp = +27 - +totalCost()
	document.getElementById('remp').value = +remp;
	return remp;
};

function totalCost(){
	var totCost = +document.getElementById('costStr').value 
		+ +document.getElementById('costDex').value 
		+ +document.getElementById('costCon').value 
		+ +document.getElementById('costInt').value 
		+ +document.getElementById('costWis').value 
		+ +document.getElementById('costCha').value;
	return +totCost;
};


// Sets the racial bonuses for each id
function selectedRace(id, textIn){

	document.getElementById('racialStr').value = dataRace[id].racialStr;
	document.getElementById('racialDex').value = dataRace[id].racialDex;
	document.getElementById('racialCon').value = dataRace[id].racialCon;
	document.getElementById('racialInt').value = dataRace[id].racialInt;
	document.getElementById('racialWis').value = dataRace[id].racialWis;
	document.getElementById('racialCha').value = dataRace[id].racialCha;

	setDropText(textIn, 'raceButton');
	showRaceImage(id);
	update();
	console.log(dataRace[id].description)

};


// Select the id function
function selectedClass(id, textIn){
	var hitDie
	var primaryAbility
	var savingThrows
	var proficiencies
	setDropText(textIn, 'classButton');
};


//This function sets the name of the dropdown to the selected token
function setDropText(val, name) {
	var y = document.getElementsByName(name);
	var aNode = y[0].innerHTML = val + ' <span class="caret"></span>'; // Append 
};


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
};


// Here all the Scores values are calculated
function calcScore(idTag){
	var base = document.getElementById('disp'+idTag).value;
	var racial = document.getElementById('racial'+idTag).value;
	document.getElementById('score' + idTag).value =  +base + +racial;
};


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
};


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
};


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

function showRaceImage(selRace){
	var dv = document.getElementById('raceImage');
	// remove all child nodes
	while (dv.hasChildNodes()) { 
		dv.removeChild(dv.lastChild); 
	}
	var img = document.createElement("IMG");

	img.setAttribute('src', dataRace[selRace].imgScr);
	dv.appendChild(img);
};



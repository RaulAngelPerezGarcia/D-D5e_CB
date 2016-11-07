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
		document.getElementById('racialCha').value = 0;		
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
	showRaceImage(id);
	update();
};


// Select the id function
function selectedClass(id, textIn){
	var hitDie
	var primaryAbility
	var savingThrows
	var proficiencies
	dropdown(textIn, 'classButton');
};


//This function sets the name of the dropdown to the selected token
function dropdown(val, name) {
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

	if(selRace == "human"){
		img.setAttribute('src', 'http://cdn.obsidianportal.com/images/65157/keldar.jpg');
		dv.appendChild(img);
		console.log('Should be showing an image of a human')
	} else if (selRace == "dwarfHill"){
		img.setAttribute('src', 'http://vignette1.wikia.nocookie.net/shattered-lands/images/9/95/Ulfberht.jpg/revision/latest?cb=20130213153257');
		dv.appendChild(img);
	} else if (selRace == "dwarfMountain"){
		img.setAttribute('src', 'http://vignette1.wikia.nocookie.net/shattered-lands/images/9/95/Ulfberht.jpg/revision/latest?cb=20130213153257');
		dv.appendChild(img);
	} else if (selRace == "elfHigh"){
		img.setAttribute('src', 'http://varg.wdfiles.com/local--files/se-mage/19455High_Elf_Avatar_by_Graysun_D.jpg');
		dv.appendChild(img);	
	} else if (selRace == "elfWood"){
		img.setAttribute('src', 'http://varg.wdfiles.com/local--files/se-mage/19455High_Elf_Avatar_by_Graysun_D.jpg');
		dv.appendChild(img);	
	} else if (selRace == "elfDrow"){
		img.setAttribute('src', 'http://varg.wdfiles.com/local--files/se-mage/19455High_Elf_Avatar_by_Graysun_D.jpg');
		dv.appendChild(img);	
	} else if (selRace == "halflingLightfoot"){
		img.setAttribute('src', 'https://db4sgowjqfwig.cloudfront.net/images/920420/Rosie_Cusswell.jpg');
		dv.appendChild(img);	
	} else if (selRace == "halflingStout"){
		img.setAttribute('src', 'https://db4sgowjqfwig.cloudfront.net/images/920420/Rosie_Cusswell.jpg');
		dv.appendChild(img);
	} else if (selRace == "dragonborn"){	
		img.setAttribute('src', 'https://s-media-cache-ak0.pinimg.com/564x/73/78/65/737865c6dbf5c9fdd4b7d982ae096b04.jpg');
		dv.appendChild(img);
	} else if (selRace == "gnomeForest"){
		img.setAttribute('src', 'https://holiviantales.files.wordpress.com/2015/04/garl.png?w=470');
		dv.appendChild(img);	
	} else if (selRace == "gnomeRock"){
		img.setAttribute('src', 'https://holiviantales.files.wordpress.com/2015/04/garl.png?w=470');
		dv.appendChild(img);		
	} else if (selRace == "halfElf"){
		img.setAttribute('src', 'https://s-media-cache-ak0.pinimg.com/originals/02/01/f5/0201f5e43c30ed7fabc517c8254245c8.jpg');
		dv.appendChild(img);	
	} else if (selRace == "halfOrc"){
		img.setAttribute('src', 'https://s-media-cache-ak0.pinimg.com/564x/98/2a/a5/982aa5c0b1a43606f472a9273c0c9bef.jpg');
		dv.appendChild(img);	
	} else if (selRace == "tiefling"){
		img.setAttribute('src', 'https://s-media-cache-ak0.pinimg.com/236x/51/33/34/513334f69ce4f629a4024a07f6d49d97.jpg');
		dv.appendChild(img);
	}else {
		img.setAttribute('src', 'https://thewhisperingway.files.wordpress.com/2013/07/386_ca_cleric2.jpg');
		dv.appendChild(img);
		console.log('Should be showing an image of a random guy')
	}
};
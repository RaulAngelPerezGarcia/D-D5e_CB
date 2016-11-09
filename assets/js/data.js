

var dataRace = {
	'human': {
		'description' : "Humans are the versatile race once again. Either they get a +1 bonus to all ability scores " +
                        "(which is better than any previous edition of the game has trained you to believe," +
                        " but still kinda bland), or they get +1 to any two ability scores they want, a free skill " +
                        "proficiency, and a free feat (which, as usual, rocks).",
		'racialStr' : 1,
		'racialDex' : 1,
		'racialCon' : 1,
		'racialInt' : 1,
		'racialWis' : 1,
		'racialCha' : 1,
		'speed': 25,
		'languages': [''],
		'traits' : [''],
		'imgScr' : 'http://cdn.obsidianportal.com/images/65157/keldar.jpg'
	},	
	'dwarfHill': {
		'description' : "Your standard dwarf. Short and stout, grumpy but loyal, love digging, and tough as an old " +
                        "boot. They get a +2 bonus to Constitution, have Darkvision, protection against poison," +
                        " training with axe and hammer weapons, training with several kinds of artisan's tools, " +
                        "the usual dwarven armored movement and stone knowledge. " +
                        "They get two subraces: Hill and Mountain.",
		'racialStr' : 0,
		'racialDex' : 0,
		'racialCon' : 2,
		'racialInt' : 0,
		'racialWis' : 1,
		'racialCha' : 1,
		'speed': 25,
		'languages': [''],
		'traits' : [''],
		'imgScr' : 'http://vignette1.wikia.nocookie.net/shattered-lands/images/9/95/Ulfberht.jpg/revision/latest?cb=20130213153257'
	},	
	'dwarfMountain': {
		'description' : '',
		'racialStr' : 2,
		'racialDex' : 0,
		'racialCon' : 2,
		'racialInt' : 0,
		'racialWis' : 0,
		'racialCha' : 1,
		'speed': 25,
		'languages': [''],
		'traits' : [''],
		'imgScr' : 'http://vignette1.wikia.nocookie.net/shattered-lands/images/9/95/Ulfberht.jpg/revision/latest?cb=20130213153257'
	},	
	'elfHigh': {
		'description' : "Still pretty standard; graceful, eerie, beautiful. Grace translates to a +2 bonus to " +
                        "Dexterity, keen senses give them Darkvision and proficiency in Perception, they are " +
                        "resistant to charming and immune to sleep, and they trance instead of sleeping. " +
                        "They get three subraces: high, wood and dark.",
		'racialStr' : 0,
		'racialDex' : 2,
		'racialCon' : 0,
		'racialInt' : 1,
		'racialWis' : 0,
		'racialCha' : 1,
		'speed': 25,
		'languages': [''],
		'traits' : [''],
		 'imgScr' : 'http://varg.wdfiles.com/local--files/se-mage/19455High_Elf_Avatar_by_Graysun_D.jpg'
	},	
	'elfWood': {
		'description' : '',
		'racialStr' : 0,
		'racialDex' : 2,
		'racialCon' : 0,
		'racialInt' : 0,
		'racialWis' : 1,
		'racialCha' : 1,
		'speed': 25,
		'languages': [''],
		'traits' : [''],
		 'imgScr' : 'http://varg.wdfiles.com/local--files/se-mage/19455High_Elf_Avatar_by_Graysun_D.jpg'
	},	
	'elfDrow': {
		'description' : '',
		'racialStr' : 0,
		'racialDex' : 2,
		'racialCon' : 0,
		'racialInt' : 0,
		'racialWis' : 0,
		'racialCha' : 1,
		'speed': 25,
		'languages': [''],
		'traits' : [''],
		 'imgScr' : 'http://varg.wdfiles.com/local--files/se-mage/19455High_Elf_Avatar_by_Graysun_D.jpg'
	},	
	'halflingLightfoot': {
		'description' : "Small, cheerful, practical creatures, halflings try to make friends with anybody. " +
                        "They usually don't have any greater goal beyond a simple, pleasant life." +
                        " They get +2 Dexterity, they're Small sized, their Lucky trait lets them reroll various " +
                        "results of 1, they're resistant to fear effects and they can move through spaces occupied " +
                        "by creatures that are Medium-sized or bigger. Their two subraces are lightfoot and stout.",
		'racialStr' : 0,
		'racialDex' : 2,
		'racialCon' : 0,
		'racialInt' : 0,
		'racialWis' : 0,
		'racialCha' : 1,
		'speed': 25,
		'languages': [''],
		'traits' : [''],
		'imgScr' : 'https://db4sgowjqfwig.cloudfront.net/images/920420/Rosie_Cusswell.jpg'
		
	},	
	'halflingStout': {
		'description' : '',
		'racialStr' : 0,
		'racialDex' : 2,
		'racialCon' : 1,
		'racialInt' : 0,
		'racialWis' : 0,
		'racialCha' : 1,
		'speed': 25,
		'languages': [''],
		'traits' : [''], 
		'imgScr' : 'https://db4sgowjqfwig.cloudfront.net/images/920420/Rosie_Cusswell.jpg'
	},	
	'dragonborn': {
		'description' : 'Essentially, they are their 4e counterparts with vaguer backgrounds, dragonborn are still ' +
                        'pretty close to what they were. +2 Strength, +1 Charisma, and choose one Chromatic or ' +
                        'Metallic Dragon; they get a breath weapon shape, breath weapon damage, and damage resistance' +
                        ' based on what they chose (cold for Silver Dragonborn, acid for Black, etc).',
		'racialStr' : 2,
		'racialDex' : 0,
		'racialCon' : 0,
		'racialInt' : 0,
		'racialWis' : 0,
		'racialCha' : 1,
		'speed': 25,
		'languages': [''],
		'traits' : [''], 
		'imgScr' : 'https://s-media-cache-ak0.pinimg.com/564x/73/78/65/737865c6dbf5c9fdd4b7d982ae096b04.jpg'
	},	
	'gnomeForest': {
		'description' :  "Crazy, hyper-energetic and insatiably curious, gnomes are also the only uncommon race in the" +
                        " corebook with full subraces." +
                        " +2 Intelligence, small-sized, Darkvision, and advantage to any saving throw against magic" +
                        " that relies on Intelligence, Wisdom or Charisma." +
                        " They get two subraces: Forest and Rock Gnomes",
		'racialStr' : 0,
		'racialDex' : 1,
		'racialCon' : 0,
		'racialInt' : 2,
		'racialWis' : 0,
		'racialCha' : 1,
		'speed': 25,
		'languages': [''],
		'traits' : [''], 
		'imgScr' : 'https://holiviantales.files.wordpress.com/2015/04/garl.png?w=470'
	},	
	'gnomeRock': {
		'description' : '',
		'racialStr' : 0,
		'racialDex' : 0,
		'racialCon' : 1,
		'racialInt' : 2,
		'racialWis' : 0,
		'racialCha' : 1,
		'speed': 25,
		'languages': [''],
		'traits' : [''], 
		'imgScr' : 'https://holiviantales.files.wordpress.com/2015/04/garl.png?w=470'
	},	
	'halfElf': {
		'description' : "Half-Elves gain +2 Charisma, making them natural diplomats, but also get +1 to two other " +
                        "ability scores of their choice, are automatically proficient in two skills of their choice," +
                        " as well as retaining the darkvision and resistances to charming and sleep of their elven" +
                        " ancestors. They can also grow beards, something that may have been in previous editions," +
                        " but is directly addressed in this one. The best PHB race for any Cha-based class, " +
                        "due to their tremendous versatility.",
		'racialStr' : 2,
		'racialDex' : 0,
		'racialCon' : 0,
		'racialInt' : 0,
		'racialWis' : 0,
		'racialCha' : 1,
		'speed': 25,
		'languages': [''],
		'traits' : [''], 
		'imgScr' : 'https://s-media-cache-ak0.pinimg.com/originals/02/01/f5/0201f5e43c30ed7fabc517c8254245c8.jpg'
	},	
	'halfOrc': {
		'description' : "Big scary bruisers, half-orcs get +2 strength and +1 constitution, have darkvision," +
                        " are automatically proficient in the Intimidation skill, are harder to kill than other races," +
                        " and deal much nastier criticals with melee weapons. This effectively makes them the best " +
                        "barbarians in the game, and gives barbarian-like abilities to any other classes. " +
                        "New design eliminates the culturally awkward standard of male orcs forcing themselves " +
                        "on human women, to the point of actually raising the idea that the race could be used for" +
                        " playing a half-dwarf, half-orc",
		'racialStr' : 2,
		'racialDex' : 0,
		'racialCon' : 1,
		'racialInt' : 0,
		'racialWis' : 0,
		'racialCha' : 1,
		'speed': 25,
		'languages': [''],
		'traits' : [''], 
		'imgScr' : 'https://s-media-cache-ak0.pinimg.com/564x/98/2a/a5/982aa5c0b1a43606f472a9273c0c9bef.jpg'
	},	
	'tiefling': {
		'description' : "Following in the footsteps of 4e, with a unified (if still very variable)" +
                        " appearance and a tiefling racial backlore as descendants of a cursed empire rather than" +
                        " spawn of a human and a fiend. +1 Intelligence, +2 Charisma, resistant to fire,'" +
                        " darkvision and Infernal Legacy, which gives them three warlock spells as racial abilities; " +
                        "the Thaumaturgy cantrip (level 1), Hellish Rebuke (1/day at level 3) and Darkness (1/day at level 5).",
		'racialStr' : 0,
		'racialDex' : 0,
		'racialCon' : 0,
		'racialInt' : 1,
		'racialWis' : 0,
		'racialCha' : 2, 
		'speed': 25,
		'languages': [''],
		'traits' : [''], 
		'imgScr' : 'https://s-media-cache-ak0.pinimg.com/236x/51/33/34/513334f69ce4f629a4024a07f6d49d97.jpg'
	},
	'none': {
		'description' : '',
		'racialStr' : 0,
		'racialDex' : 0,
		'racialCon' : 0,
		'racialInt' : 0,
		'racialWis' : 0,
		'racialCha' : 1,
		'speed': 0,
		'languages': [''],
		'traits' : [''], 
		'imgScr' : 'https://thewhisperingway.files.wordpress.com/2013/07/386_ca_cleric2.jpg'
	}
};

var dataClass = {
	'barbarian':{
		'description' : 'A fierce warrior of primitive background who can enter a battle rage.',
		'hitDie' : 'd12',
		'savingThrow1' : 'strength',
		'savingThrow2' : 'constitution',
		'armorProficiency' : ['light', 'medium', 'shield'],
		'weaponProficiency' : ['simple', 'martial'],
		'primaryAbility' : 'strength'
	},
	'bard':{
		'description' : 'An inspiring magician whose power echoes the music of creation.',
		'hitDie' : 'd8',
		'savingThrow1' : 'dexterity',
		'savingThrow2' : 'charisma',
		'armorProficiency' : 'light',
		'weaponProficiency' : ['simple', 'handCrossbow', 'rapier', 'longsword', 'shortsword'],
		'primaryAbility' : 'charisma'
	},
	'cleric':{
		'description' : 'A priestly champion who wields divine magic in service of a higher power.',
		'hitDie' : 'd8',
		'savingThrow1' : 'wisdom',
		'savingThrow2' : 'charisma',
		'armorProficiency' : ['light', 'medium', 'shield'],
		'weaponProficiency' : 'simple',
		'primaryAbility' : 'wisdom'
	},
	'druid':{
		'description' : 'A priest of the Old Faith, wielding the powers of nature - moonlight and plant growth' +
						', fire and lightning - and adopting animal forms.',
		'hitDie' : 'd8',
		'savingThrow1' : 'intelligence',
		'savingThrow2' : 'wisdom',
		'armorProficiency' : ['light', 'medium', 'shield'],
		'weaponProficiency' : ['club', 'dagger', 'dart', 'javelin', 'mace', 'quarterstaff', 'scimitar', 'sickle', 'sling', 'spear'],
		'primaryAbility' : 'wisdom'
	},
	'fighter':{
		'description' : 'A master of martial combat, skilled with a variety of weapons and armor.',
		'hitDie' : 'd10',
		'savingThrow1' : 'strength',
		'savingThrow2' : 'constitution',
		'armorProficiency' : ['all', 'shield'],
		'weaponProficiency' :  ['simple', 'martial'],
		'primaryAbility' : ['strength', 'dexterity']
	},
	'monk':{
		'description' : 'A master of martial arts, skilled with fighting hands and martial monk weapons.',
		'hitDie' : 'd8',
		'savingThrow1' : 'strength',
		'savingThrow2' : 'dexterity',
		'armorProficiency' : '',
		'weaponProficiency' : ['simple', 'shortsword'],
		'primaryAbility' : ['wisdom', 'dexterity']
	},
	'paladin':{
		'description' : 'A holy warrior bound to a sacred oath.',
		'hitDie' : 'd10',
		'savingThrow1' : 'wisdom',
		'savingThrow2' : 'charisma',
		'armorProficiency' : ['all', 'shield'],
		'weaponProficiency' : ['simple', 'martial'],
		'primaryAbility' : ['strength', 'charisma']
	},
	'ranger':{
		'description' : 'A master of ranged combat, one with nature.',
		'hitDie' : 'd10',
		'savingThrow1' : 'strength',
		'savingThrow2' : 'dexterity',
		'armorProficiency' : ['light', 'medium', 'shield'],
		'weaponProficiency' : ['simple', 'martial'],
		'primaryAbility' : ['wisdom', 'dexterity']
	},
	'rogue':{
		'description' : 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.',
		'hitDie' : 'd8',
		'savingThrow1' : 'dexterity',
		'savingThrow2' : 'intelligence',
		'armorProficiency' : 'light',
		'weaponProficiency' : ['simple', 'handCrossbow', 'longsword', 'rapier', 'shortsword'],
		'primaryAbility' : 'dexterity'
	},
	'sorcerer':{
		'description' : 'A spell-caster who draws on inherent magic from a gift or bloodline.',
		'hitDie' : 'd6',
		'savingThrow1' : 'constitution',
		'savingThrow2' : 'charisma',
		'armorProficiency' : '',
		'weaponProficiency' : ['dagger', 'dart', 'sling', 'quarterstaff', 'lightCrossbow'],
		'primaryAbility' : 'charisma'
	},
	'warlock':{
		'description' : 'A wielder of magic that is derived from a bargain with an extraplanar entity.',
		'hitDie' : 'd8',
		'savingThrow1' : 'wisdom',
		'savingThrow2' : 'charisma',
		'armorProficiency' : 'light',
		'weaponProficiency' : 'simple',
		'primaryAbility' : 'charisma'
	},
	'wizard':{
		'description' : 'A scholarly magic-user capable of manipulating the structures of reality.',
		'hitDie' : 'd6',
		'savingThrow1' : 'intelligence',
		'savingThrow2' : 'wisdom',
		'armorProficiency' : '',
		'weaponProficiency' : ['dagger', 'dart', 'sling', 'quarterstaff', 'lightCrossbow'],
		'primaryAbility' : 'intelligence'
	},
	'none2':{
		'description' : '-',
		'hitDie' : '-',
		'savingThrow1' : '-',
		'savingThrow2' : '-',
		'armorProficiency' : '-',
		'weaponProficiency' : '-',
		'primaryAbility' : '-'
	}
};

// Costs of points
var cost = {
	8 :  +0,
	9 :  +1,
	10 : +2,
	11 : +3,
	12 : +4,
	13 : +5,
	14 : +7,
	15 : +9
};

var player = {
	"health" : 20,
	"damage" : 4
};

var setting = ["Cave",
// "Castle",
// "Forest",
// "Dungeon"
];

var caveMonster = {
	"Goblin" : { "health" : 3, "damage" : 2 },
	"Bats" : { "health" : 1, "damage" : 1 },
	"Balrog": { "health": 10, "damage": 7 },
	"Spider": { "health": 2, "damage" : 2}
}

var location = setting[Math.floor(Math.random()*setting.length)];

var description = {
	Cave: ['Goblin', 'Bats', "Balrog", "Spider"],
	// Castle: ['Knight', "Bishop", "King", "Queen", "Pawn"],
	// Forest: ["Elf", "Fairy", "Bear"],
	// Dungeon: ["Executioner", "Warden", "Prisoner"]
};


function monsterEncounter(environment){
	var randomEncounter = Math.floor(Math.random()*description[environment].length)
	var monster = description[environment][randomEncounter]
	return monster
}

function monsterAttack(monster){
	player.health = player.health - monster.damage;
}

function playerAttack(monster){
	monster.health = monster.health - player.damage;
}

var monster = monsterEncounter(location)
monsterAttack(caveMonster[monster])

console.log("You are in a " + location)
console.log(monster + " has appeared!")
console.log(monster + " attacks player!")
console.log("Player's health is now", player.health)

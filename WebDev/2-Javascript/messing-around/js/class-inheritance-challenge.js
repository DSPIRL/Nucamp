class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element, mood) {
        super(type, color);
        this.element = element;
        this.mood = mood;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }

    checkMood() {
        console.log(`The ${this.color} ${this.element} ${this.type} is ${this.mood}.`);
    }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly.`);
    }
}

class Goose extends Monster {
    constructor(type, color, offensiveMove) {
        super(type, color);
        this.offensiveMove = offensiveMove;
    }
    attack() {
        console.log(`The ${this.color} ${this.type} injured you with ${this.offensiveMove}!`)
    }
}

const goose = new Goose("goose", "white", "aggressive-pecking")
const woodDragon = new Dragon("dragon", "brown", "wood", "sleepy");
const werewolf1 = new Werewolf("werewolf", "black");

woodDragon.roar();
woodDragon.fly();
woodDragon.checkMood();
werewolf1.howl();
goose.attack();

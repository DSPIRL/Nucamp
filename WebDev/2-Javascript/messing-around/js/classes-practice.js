// class Dragon {
//     constructor(color, maxHP) {
//         this.color = color;
//         this.maxHP = maxHP;
//     }
//     roar() {
//         console.log(`The ${this.color} dragon lets out a tremendous roar!`);
//     }
// }

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
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps it's wings and begins to fly.`);
    }
}

class Warewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.color} ${this.type} howls loudly.`);
    }
}
const warewolf1 = new Warewolf("warewolf", "gray");
const dragon1 = new Dragon("dragon", "blue", "water");
const monster1 = new Dragon("monster", "red", "food");

monster1.roar();
dragon1.fly();
warewolf1.howl();

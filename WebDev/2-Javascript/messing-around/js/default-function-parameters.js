function logSum(a, b) {
    if (a === undefined) { a = 0; }
    if (b === undefined) { b = 0; }
    console.log(a + b);
}

function logSums(a = 0, b = 0) {
    console.log(a + b);
}

class Cat {
    constructor(name = 'cat', color = 'gray') {
        this.name = name;
        this.color = color;
    }
    meow() {
        console.log(`The ${this.color} cat named ${this.name} meows.`)
    }
}

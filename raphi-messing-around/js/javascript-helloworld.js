var names = 'John Doe';  // This is an old way of creating variables that is not used much anymore
let age = 30;  // this is a new way of adding variables that can take any data type and the value CAN change
const pi = 3.14;  // this is a new way of adding variables that can take any data type and the value CANNOT change
// Data Types: Number String Boolean Undefined Null Object Symbol BigInt
let houseType = 'straw';
let sky = 'blue';


function getName() {
    const userName = prompt("What is your name?");
    sayHello(userName);
}
function sayHello(name) {
    alert("Hello, " + name + "!");
}

function getArea(width, length) {
    alert(width * length);
}

function foo(bar) {
    alert(bar);
}


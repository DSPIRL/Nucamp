// While Loops

let i = 0;
while (i < 5) {
    i += 5;
    console.log("i is", i);
}

//Do... while loops

let j = 0;
while(j) { // j is falsy, so loop will not be entered
    console.log("Got in the loop");
}

let k = 0;
do {
    console.log("Got in the loop");
} while(k); //do ... while, so loop will be entered once

// For Loops
let x = 5;
for (let l = 1; l <=3; l++)
{
    x = x * l;
    console.log(x);
}

//For .. of Loops
const exampleArray = [2,4,6,8];
for (const n of exampleArray)
{
    console.log(n * 2);
}

// Break & Continue
// test a guess of -1
// test a guess of true
let fingers = Math.floor(Math.random() * 10) + 1;
console.log(fingers);
let guess = 0;
while (guess !== fingers) {
    guess = +prompt("How many fingers am I holding up");
    console.log(guess);
    if (isNaN(guess)) {
        break;
    }
    if ((guess < 0) || (guess > 10)) {
        continue;
    }
    if (guess === fingers) {
        console.log("You got it");
    } else {
        console.log("Try again");
    }

}
// Arrays
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length); //  displays how many elements are in the array

// Array methods
// https://www.w3schools.com/jsref/jsref_obj_array.asp
console.log(fruits.includes('banana'));
console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf("grape"));

// Mutating vs non-mutating
console.log(fruits.push('mango'));
console.log(fruits); // mutated
//non mutating
let newArray = ['kiwi', 'cantelope'].concat(fruits);
console.log(newArray); 

//String methods
// https://www.w3schools.com/jsref/jsref_obj_string.asp

//Strings are iterables which means you can get to each one with a for loop
let dogName = "Fido";
for (letter of dogName){
    console.log(letter);
}

// Scope of variables - where in our code can we access the variable and the data it has in it (how long is it stored in memory)

//Global Variable (no blocks { } )
let globalVariable = "Hello";

function greeting(fname, lname) {
    /*
        Anything declared in between { } here is block scope (children can inherit)
    */
    let fullName = fname + " " + lname;

    if (true) {
        /* Acess parent global varible from here as well as function variable (fullName) */
        console.log(globalVariable + " " + fullName);

        var fnAccess = "accessible by parent fn - bad practice"
        // if you were to change var to let then you cannot access which is considered better practice
    }

    console.log(fnAccess);
}

greeting("John", "Doe");

// Math random
Math.random(); // 0 - .999999999
Math.random() * 10  //0 - 9.99999999999
Math.floor() // gives just the decimal  0 - 9
// 1 thru 11 then, add 1 in the final step
Math.floor(Math.random() * 11) + 1

//Function Declarations
function inchesToCM(inches) {
    return inches * 2.54;
}
const lengthInches = 3;
const lengthCm = inchesToCM(lengthInches);
console.log(lengthCm)

//Function Expressions
function getFullName(firstName, lastName) {
    return firstName + " " + lastName
}
//rewritten as an anonymous Function
const getFullName1 = function (firstName, lastName) {
    return firstName + " " + lastName
}
console.log("Hello", getFullName1("Steve", "Thompson"));

// Arrow Functions
const getFullName2 = (firstName, lastName) => firstName + " " + lastName;
console.log("Hello", getFullName2("Steve", "Thompson"));
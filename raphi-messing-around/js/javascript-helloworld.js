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
    console.log("Alert sent!");
}

function getArea(width, length) {
    alert(width * length);
}

function foo(bar) {
    alert(bar);
}

let dogSits = true;

let dogGetsTreat;

if (dogSits) {
    dogGetsTreat = true;
}




// if (roll === 1 || roll === 6) {
//     console.log("You win");
// } else if ( roll <= 3) {
//     console.log("Roll again.")
// } else {
//     console.log("You lose.")
// }




function testSwitch(size) {
    switch (size) {
        case "small":
            alert("This chair is too small.");
            break;
        case "medium":
            alert("This chair is just right.");
            break;
        case "large":
            alert("This chair is too big.");
            break;
        default:
            alert("This chair is an unknown size.");
    }
}

let funCheck = true && null && 5;

let statusThing = "2" === 2;

let statusAsString = String(!statusThing);

let boolZeroComparison = 0 === false;

console.log(funCheck);

console.log(statusThing);

console.log(statusAsString);

console.log(boolZeroComparison);

console.log(dogGetsTreat);


function getMembershipPerks(mLevel) {
    /* Your switch statement should be written below this line.*/
    mLevel = mLevel.toLowerCase()  // forcing all getMembershipPerks() arguments .toLowerCase() so UPPERCASE arguments (e.g. "GOLD" or "Gold") don't cause errors.
    if (mLevel === "gold" || mLevel === "silver" || mLevel === "bronze") {
        switch (mLevel) {
            case "gold":
                console.log("Unlimited Free Plays\n" + "VIP Room Access");
                break;
            case "silver":
                console.log("VIP Room Access");
                break;
            case "bronze":
                console.log("VIP Room Access on Weekdays");
            //   break;
            // default:
            //   console.log("Invalid membership level");
        }
    }
    else {
        console.log("Invalid membership level");
    }
}

getMembershipPerks("asdf");
/* After you make changes, you will need to click the Run button on the upper right. Auto-updating preview has been turned off for this Codepen. */

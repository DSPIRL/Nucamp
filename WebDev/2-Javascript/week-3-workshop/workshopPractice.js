

// https://www.w3schools.com/js/js_objects.asp
// w3schools ... tutorials >> learn javascript >> JS OBJECTS (see menu on left)

//compare functions and methods
const car = {
    name: 'Fiat',
    model: 500,
    // this is a method - it belongs to the object and knows all about it's properties
    start(){
        //let name = "Porche";
        console.log("Start the " + this.name);
    }

}
car.start() //run the method start that belongs to the object car

//this is a function
function start() {
    console.log("Start the car");
}

start() // this has no object 

// *** Making Custom Objects *****

const bicycle= {
    color: "blue",
    electric: false,
    start() {
        console.log('You begin to pedal the bike.');
    }
}

console.log(bicycle);
console.log(bicycle.color);
console.log(bicycle.start);
bicycle.start();

//turn it green
bicycle.color = 'green';
//make it electric
bicycle.electric = true;
//change the start method
bicycle.start = function (){
    console.log("You start the engine on your bicycle");
}

bicycle.start();


//******* CREATE A CLASS

class Book {
    constructor(title, author, year, isRead = false)
    {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isRead = isRead;
    }
}

const book1 = new Book('Steppenwolf', 'Herman Hesse', 1927, true);
console.log(`${book1.title}, ${book1.author}, ${book1.year}, ${book1.isRead}`);

const book2 = new Book('Dune', 'Frank Herbert', 1965);
console.log(`${book2.title}, ${book2.author}, ${book2.year}, ${book2.isRead}`);

const book3 = new Book("Title", "Author");
console.log(`${book3.title}, ${book3.author}, ${book3.year}, ${book3.isRead}`);

//************* CLASS INHERITANCE
class Audiobook extends Book {
    constructor(title, author, year) {
        super(title, author, year);    
    }
    playAudio() {
        console.log(`The audio recording of ${this.title} begins to play.`);
    }
}

const book4 = new Audiobook('The Martian Chronicles', 'Ray Bradbury', 1950);
book4.playAudio();


//***** JSON */

let data = {name: "John Doe", age:30};

console.log(data);
console.log(typeof(data));
//turn our object into a JSON string
let json = JSON.stringify(data);
console.log(json);
console.log(typeof(json));
// "{name: "John Doe", age:30}"
// "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum."

//turn our json back into an object
var backToObject = JSON.parse(json);
console.log(backToObject);
console.log(typeof(backToObject));


//*** TRY-CATCH-FINALLY */
// a more elegant way to "fail"
console.log(nucamp) ;
console.log("more");

//still displays the error, but doesn't crash (stop) the code from running
try {
    console.log("Start of try runs");
    nucamp; //error
} catch(err)
{
    console.log("Error has occurred", err.stack)
} finally {
    console.log("this is the finally block");
}

//*** CUSTOM ERROR MESSAGES WITH THROW */
try {
    let userData = '{"age": 30}';
    let user = JSON.parse(userData);
    if (!user.name) throw new SyntaxError("Incomplete data: no name");
} catch (e)
{
    console.log('jsonErr ' + e.message);
}




// For Workshop

// Arrays of Objects

let student1 = {
    name: "mickey",
    email: "mickey@disneyworld.com"
}
let student2 = {
    name: "minnie",
    email: "minnie@disneyworld.com"
}
let disneyCharacters = [];
disneyCharacters.push(student1, student2);
//console.log(disneyCharacters);  // displays the array of objects

class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

let student3 = new Student("bugs bunny", "bugs@disneyworld.com");
disneyCharacters.push(student3);
console.log(disneyCharacters); // displays the array of all the objects

// loop through each element in the array to get to the individual elements (in this case each object)
for (let i = 0; i < disneyCharacters.length; i++) {
    // displays the object
    console.log(`From the ${i} for loop ${disneyCharacters[i]}`);

    // displays the objects properties
    // console.log(`From the ${i} for loop ${disneyCharacters[i].name}`);
}

// move the for loop to a function and debug the code
function displayCharacters(students) {
    for (let i = 0; i < students.length; i++) {
        
        console.log(`From the ${i} for loop ${disneyCharacters[i].name}`);
    }

}

displayCharacters(disneyCharacters);







// Node Relationships
let el = document.querySelector("div");
console.log(el.firstElementChild);
console.log(el.firstChild);

// DOM -Document Object Model
// https://www.w3schools.com/jsref/dom_obj_document.asp
// getElementById()
// getElementsByTagName()
// querySelector()
// addEventListener()

// ******* LOCATING NODES *******
let el1 = document.getElementById("second");
let el2 = document.getElementsByTagName("h2");
let el3 = document.querySelector("h1");
console.log(el1);

// ******* INLINE ONEVENT HANDLERS *******
// https://www.w3schools.com/tags/ref_eventattributes.asp
// <button onclick="doSomething()" >click me</button>
function doSomething()
{
    console.log("This div was clicked")
}
 // ******* ADDEVENTLISTENERS *******
let btnNode = document.querySelector("button");
console.log(btnNode);


// remove the "on" from the event
// don't include parens with the function name
btnNode.addEventListener("click", doSomething); 

// *******   REMOVE EVENTLISTENER *******
btnNode.addEventListener("mouseout", doSomethingElse);    
function doSomethingElse()
{
    btnNode.removeEventListener("click",doSomething );
    console.log("removed the click event");
}  



// *******  CREATING & ADDING NODES *******

// ****  REPLACE the code in  doSomething() with:
// create the element (a method of the document object)
let el4 = document.createElement("p");
console.log(el4);

// add some text to the paragraph
el4.textContent="Element #4";
console.log(el4);

// put it inside your <div> element
document.querySelector("div").appendChild(el4);

// create the text node and 
let hello = document.createTextNode("hello World");
console.log(hello); // hello is an element

// Elements are objects too 
// https://www.w3schools.com/jsref/dom_obj_all.asp

//insertbefore()
// textContent
// remove()
// removeChild()

// add it to the paragraph you just created
el4.insertBefore(hello, el4.firstChild);

//add another element to the document
let el5 = document.createElement("h3");
console.log(el5)
el5.textContent = "Element #3";
console.log(el5);
// now append it to the document
document.body.appendChild(el5);
// ***********************************************


// *******  Removing  Nodes *******

/*
    <button id="example">Do Something Exciting</button>
    <div id="cats">
        <p id="myP"><img src="cat.jpg" alt="Cat"></p>
    </div>
*/

// replace the code in script with this:
document.getElementById("example").addEventListener("click", exciting);
function exciting()
{
    const myPara = document.querySelector("#myP");
    // removes the entire <p> and it child <img>
    myPara.remove(); 

    // removes just the <img>
    // myPara.removeChild(myPara.firstChild); 
}
// ******* MODIFYING NODE PROPERTIES *******
// https://www.w3schools.com/tags/default.asp
// https://www.w3schools.com/tags/ref_attributes.asp

// replace code in the exciting function
myImg = document.querySelector("img")
console.log(myImg);
console.log(myImg.width);

//if an element is an object, then it's attributes are its properties
myImg.width = "400"

// can we change other properties too?
myImg.src="cat2.jpg";

// ******* CLONING NODES *******
let newCatDiv = document.getElementById("cats");
let newCat = newCatDiv.cloneNode()
console.log(newCat);
// let newCat = newCatDiv.cloneNode(true);
console.log(newCat);

//newCatDiv.appendChild(newCat);















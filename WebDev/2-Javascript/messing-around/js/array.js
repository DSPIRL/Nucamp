let firstArray = [1,2,3,4,5];

let secondArray = [6,7,8,9,0];

console.log(firstArray);

console.log(firstArray[1]);

console.log(firstArray.length);

console.log(firstArray.indexOf(5));

console.log(firstArray.includes(5));

let thirdArray = firstArray.concat(secondArray);

console.log(thirdArray);

// add a comma and space after every array value
let arrayThreeToString = thirdArray.join(", ");

console.log(arrayThreeToString);

console.log(firstArray.pop());

console.log(firstArray.push(123));

console.log(firstArray.shift());

console.log(firstArray.unshift(10,11,12));


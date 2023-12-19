function printFibonacciWhileLoop(count) {
    let a = 0;
    let b = 1;
    let i = 0;
    while (i < count) {
       let next = a + b;
       console.log(`Fibonacci: ${a}`);
       console.log(`Count: ${count}`);
       a = b;
       b = next;
       i++;
    }
}


function printFibonacciForLoop(count) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < count; i++) {
        let next = a + b;
        console.log(`Fibonacci: ${a}`);
        console.log(`Count: ${i}`);
        a = b;
        b = next;
    }
}


function fibonacciUntilLimit() {
    let highestNumberToPrint = prompt("What is the highest number you want to print?");
    let a = 0;
    let b = 1;
    let count = 0;
    while (a <= highestNumberToPrint) {
        let next = a + b;
        console.log(`Fibonacci: ${a}`);
        console.log(`Count: ${count}`);
        a = b;
        b = next;
        count++;
    }
}


function fibonacciEvenNumbers() {
    let highestNumberToPrint = prompt("What is the highest number you want to go to?");
    let a = 0;
    let b = 1;
    while (a <= highestNumberToPrint) {
        let next = a + b;
        let evenOrOdd = (a % 2);
        if (evenOrOdd === 0) {
            console.log(`Fibonacci: ${a}`);
        }
        a = b;
        b = next;
    }
}


function fibonacciSumUp() {
    let numbersToAdd = prompt("How many numbers do you want to add?");
    let a = 0;
    let b = 1;
    let sum = 0;

    for (let i = 0; i < numbersToAdd; i++) {
        let next = a + b;
        sum += next;
        a = b;
        b = next;
    }

    console.log(sum);

}


function fibonacciIsNumberPartOf() {
    let numberToCheck = prompt("What number do you want to check?");
    let a = 0;
    let b = 1;
    let count = 0;
    let foundMatch;

    while (a !== numberToCheck) {
        if (a === numberToCheck) {

        }


        let next = a + b;
        console.log(`Fibonacci: ${a}`);
        console.log(`Count: ${count}`);
        a = b;
        b = next;
        count++;

    }
}

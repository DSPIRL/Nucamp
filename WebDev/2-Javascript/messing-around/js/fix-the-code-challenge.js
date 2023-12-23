/****************************** Challenge 1 ******************************/
// the semicolon was inside the function declaration instead of at the end and curly braces were being used where parenthesis should have been used.
const getInitials = (firstName, lastName) => (firstName[0] + lastName[0]);
console.log(getInitials("Charlie", "Brown")); // this should console.log "CB"


/****************************** Challenge 2 ******************************/
// the sequential "if" statements were running each valid case and changing the value of "grade" accordingly, because of this, the value of "grade" would equal "B", then "C", then finally stop at "D" since it didn't fit the criteria for the "F" grade. This can be fixed by using "else if" statements after the first "if" statement.
function getStudentGrade(finalExamPoints, assignmentsPoints) {
    const percent = ((finalExamPoints + assignmentsPoints) / 300) * 100;
    let grade = "Unknown";
    if (percent >= 90) {
        grade = "A";
    }
    if (percent >= 80) {
        grade =  "B";
    }
    else if (percent >= 70) {
        grade =  "C";
    }
    else if (percent >= 60) {
        grade =  "D";
    }
    else if (percent < 60) {
        grade =  "F";
    }
    return grade;
}
console.log(getStudentGrade(70, 180)); // this should console.log "B"


/****************************** Challenge 3 ******************************/
// The value entered when digitToWord() was called was a string, where it was expecting a number. I added a line to make the code accept strings that have numbers.
function digitToWord(digit) {
    digit = Number(digit);
    switch (digit) {
        case 0: return "zero";
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return "nine";
        default: return "unknown";
    }
}
const word = digitToWord("5");
console.log("5 is " + word); // This should console.log "5 is five"


/****************************** Challenge 4 ******************************/
function hasTreat(treat) {
    const treatsArr = ['cookie', 'cake', 'muffin', 'pie', 'ice cream'];
    return treatsArr.indexOf(treat) !== -1;

}
if (hasTreat("cookie")) { // You should have a cookie in the treatsArr array.
    console.log("You have a cookie!");
} else {
    console.log("You have no cookie."); // This is wrong. You should have a cookie.
}
/* Tip: The problem you are trying to resolve here is why the function returns false
   for when you are checking to see if "cookie" exists in the treatsArr array.
   Do not alter the treatsArr array to resolve this, and do not alter the hasTreat()
   function to ONLY return true for an argument of "cookie" - it should return true
   for an argument of any item in the treatsArr array. The code you need to fix is
   is in the "if" condition. */


/****************************** Challenge 5 ******************************/
const randomValue = (min, max) => {
    const val = Math.random() * (max - min) + min;
};
console.log(randomValue(2,6)) // should return a random numeric value between 2 and 6.
// For an explanation of Math.random, see:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_number_between_two_values
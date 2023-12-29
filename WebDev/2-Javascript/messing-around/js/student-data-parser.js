function parseStudentData(jsonString) {
    //add your code here
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error(error);
        return 'Invalid JSON string provided.';
    }
}

//you do not need to modify this data
const jsonString = '{ "name": "John", "age": 15, "grades": [90, 85, 78] }';
const invalidJsonString = '{ name: John, "age": 15, "grades": [90, 85, 78] }';

//uncomment these lines to view your test outputs
console.log(parseStudentData(jsonString)); // Output: { name: 'John', age: 22, grades: [ 90, 85, 78 ] }
console.log(parseStudentData(invalidJsonString)); // Output: Invalid JSON string provided.

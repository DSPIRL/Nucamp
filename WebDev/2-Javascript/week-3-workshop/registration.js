// Task 1
/**
 * Represents a student with a name and email.
 * @class
 */
class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }


    /**
     * Retrieves information about the user.
     *
     * @returns {string} A string containing the user's name and email.
     */
    getInfo() {
        return `Name: ${this.name}
Email: ${this.email}`;
    }
}


// Task 2
/**
 * Represents a Bootcamp.
 * @class
 */
class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
        // this.students.push(new Student(this.name, level, students));  // THIS IS A PROBLEM CHILD, it is adding a Student object with name and level property values.
        // ^ above commented out line can be deleted, just thought I'd point it out.
    }


    // Task 3

    /**
     * Registers a student by adding them to the list of students, if they don't already exist.
     *
     * @param {Object} studentToRegister - The student object to register.
     * @param {string} studentToRegister.name - The name of the student.
     * @param {string} studentToRegister.email - The email of the student.
     * @returns {boolean} - Returns true if the student is successfully registered, otherwise false.
     */
    registerStudent(studentToRegister) {
        /*
        * there was also a bug in this function that was exiting the for loop the FIRST time it checked for -
        * a pre-existing email, meaning that if the first student object in the array did not contain the duplicate -
        * email property we would still add a new student object, so we would end up with duplicates.
        */
        if (!studentToRegister.name || !studentToRegister.email) {
            console.log('Invalid name or email.');
            return false;
        } else if (this.students.some(student => student.email === studentToRegister.email)) {  // link to .some() array function info - https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/some
            console.log(`The following email is already registered: ${studentToRegister.email}`);
            return false;
        } else {
            this.students.push(studentToRegister);
            console.log(`${studentToRegister.name} registered successfully.`);
            return true;
        }
    }


    // Task 4
    /**
     * @returns {boolean}
     */
    listStudents() {
        if (this.students.length === 0) {
            console.log(`No students are registered to the ${this.name} bootcamp.`);
            return false;
        } else {
            console.log(`The students in ${this.name} are listed below:`);
            for (let i = 0; i < this.students.length; i++) {
                console.log(`Name: ${this.students[i].name} Email: ${this.students[i].email}`);
            }
            return true;
        }
    }


    // Bonus Task 1
    /**
     * Retrieves information about a Bootcamp object.
     *
     * @returns {string} The info string containing the name and level.
     */
    getInfo() {
        return `Name: ${this.name}
Level: ${this.level}`;
    }

    // Bonus Task 2
    /**
     * Removes a student from the list of students.
     *
     * @param {string} studentEmail - The email address of the student to be removed.
     * @return {void}
     */
    removeStudent(studentEmail) {
        this.students = this.students.filter(student => student.email !== studentEmail);  // link to .filter() array function - https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/filter
    }
}




///// TESTS /////

// Test 1
testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}


// Test 2
reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
    && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}


// Tests 3 and 4
const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    const attemptFour = bootcamp.registerStudent(new Student("Human Person", "test@example.com"));
    console.log(reactBootcamp.students);
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));

    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }

    const newBootcamp = bootcamp.students;  // added this to refill bootcamp.students array later.
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
    bootcamp.students = newBootcamp;  // Refilling bootcamp.students array.
    // console.log(reactBootcamp);
};
runTest(reactBootcamp, testStudent);


///// Bonus Tasks Tests /////
// Task 1 - Get bootcamp info
console.log(reactBootcamp.getInfo());
console.log('END BONUS TASK 1')

// Task 2 - Remove student
reactBootcamp.removeStudent('test@example.com');
console.log(reactBootcamp.students);
console.log('END BONUS TASK 2');

// Task 3 - Get student info
console.log(testStudent.getInfo());
console.log('END BONUS TASK 3');
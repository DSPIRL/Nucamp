// Task 1
class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}


// Task 2
class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        try {
            if (!studentToRegister.name || !studentToRegister.email) {
                console.log("Invalid name or email.");
                // throw new Error("Invalid name or email.");
                return false;
            } else {
                for (const student of this.students) {
                    if (student.email === studentToRegister.email) {
                        console.log("Email is already registered.");
                    } else {
                        this.students.push(studentToRegister);
                        console.log(`${studentToRegister.name} has been registered.`);
                    }


                }
            }
        } catch (error) {
            console.error(error.message);
        }
    }
}




////////////// TESTS //////////////

// Student Class Test
testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}


// Bootstrap Class Test
reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
    && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}


// Register Student() Function Test
const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }
};
runTest(reactBootcamp, testStudent);


//
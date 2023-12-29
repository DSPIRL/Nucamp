// username validation
let validateUsername = (username) => {
  let invalid = username.length < 5;
  if (invalid) {
    throw new Error("Username validation failed: username must be at least 5 characters");
  }
};

// password validation
let validatePassword = (password) => {
  let tooShort = password.length < 8;
  let missingDigit = !/\d/.test(password);
  let missingLetter = !/[a-z A-Z]/.test(password);
  let missingSymbol = !/[^a-zA-Z0-9]/.test(password);
  if (tooShort) {
    throw new Error("Password validation failed: password length must be at least 8 characters");
  } else if (missingDigit) {
    throw new Error("Password validation failed: password must have at least 1 numeric character");
  } else if (missingLetter) {
    throw new Error("Password validation failed: password must contain at least 1 alphabetical character");
  } else if (missingSymbol) {
    throw new Error("Password validation failed: password must contain at least 1 special character");
  }
};

// email validation
let validateEmail = (email) => {
  let missingAt = !/@/.test(email);
  let missingDot = !/\./.test(email);
  if (missingAt) {
    throw new Error("Email validation failed: email must contain '@'");
  }
  else if (missingDot) {
    throw new Error("Email validation failed: email must contain '.'")
  }
}

// user validation
let validateUser = (user) => {
  try {
    validateUsername(user.username);
    validatePassword(user.password);
    validateEmail(user.email);
    console.log('Success');
    return true;
  } catch(error) {
    console.log(error.message);
    return false;
  }
};

let userDude = { username: 'bobbobbins', password: 'Test1234!', email: 'bob@bob.bob'};
validateUser(userDude);







//----------------------------- TESTS --------------------------------------------
// Do not modify the below code -- this is test code that will help you determine if you completed each task correctly. Be sure to open the console to see the test messages.

//test function
function testValidation() {
  function runTest(description, testFunc, expectError = false) {
    try {
      const result = testFunc();
      if (expectError) {
        console.error(`${description} failed. Expected an error but did not receive one.`);
      } else if (result) {
        console.log(`${description} passed.`);
      } else {
        console.error(`${description} failed.`);
      }
    } catch (e) {
      if (expectError) {
        console.log(`${description} passed. Received an expected error.`);
      } else {
        console.error(`${description} threw an unexpected error:`, e.message);
      }
    }
  }

  //test case data - these are objects!
  const user1 = {username: "john", password: "Password1", email: "john@example.com"}; //should fail (username)
  const user2 = {username: "janedoe", password: "Password", email: "jane@example.com"}; //should fail (password missing number)
  const user3 = {username: "juliadoe", password: "Pword1", email: "julia@example.com"}; //should fail (password too short)
  const user4 = {username: "jamaldoe", password: "Password1", email: "jamal.example.com"}; //should fail (email)

  //tests
  runTest("Username validation - short username", () => validateUsername(user1.username), true); // Expects an error
  runTest("Password validation - missing number", () => validatePassword(user2.password), true); // Expects an error
  runTest("Password validation - too short", () => validatePassword(user3.password), true); // Expects an error
  runTest("Email validation - missing @ symbol", () => validateEmail(user4.email), true); // Expects an error
  runTest("User validation", () => {
    return !validateUser(user1) && // short username, expects an error
        !validateUser(user2) && // missing number in password, expects an error
        !validateUser(user3) && // password too short, expects an error
        !validateUser(user4);   // missing @ in email, expects an error
  });
}

console.clear();
testValidation();
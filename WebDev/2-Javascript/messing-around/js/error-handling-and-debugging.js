function checkAge(age) {
    // Throw a new Error if age is less than 18
    if (age < 18) {
        throw new Error("Age is less than 18");
    }
}

function testAge(age) {
    //set up a try/catch/finally block
    try {
        //inside the try, call checkAge() with an invalid age
        checkAge(age);
        //alert this age is eligible
        alert("This age is eligible");
    } catch (error){
        //inside the catch, alert your custom error message
        alert(error.message);
    } finally {
        //inside the finally, alert that the test is complete
        alert("The test is complete");
    }
}

document.getElementById("ageForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const age = document.getElementById("age").value;
    testAge(age);
});
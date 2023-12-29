# What You'll Do

## The Scenario:
In the town of Eduville, the local school is moving from paper-based records to a digital system. They have collected student data in various formats, including JSON. However, they need a reliable way to import this data into their new system without crashing, even if the data is sometimes malformed.
You are the software consultant chosen by the Eduville school to build the student data parser. Your challenge is to create a function to parse JSON data representing a student and to implement robust error handling in case the data is not in the correct format.


## Your Goals:
- Parse JSON data.
- Implement error handling for invalid JSON.


## Instructions
1. Fork the CodePen found here: Parsing Practice: Student Data Parser
2. You do not need to modify the HTML for this exercise. Finish the JavaScript functions as follows:
3. Inside the parseStudentData function, set up a try/catch block to handle errors in the data, in case the JSON string is malformed.
4. Inside the try block, use JSON.parse() to parse the input string.
5. In the catch block, return a custom error message.
6. Un-comment the last two lines to view the results in the console.


Post the URL of your forked version of this Codepen to this forum.
You will not be graded on this challenge. It will be used for class discussion and knowledge assessment. Please submit your attempt even if it's not working completely.
You should see a message similar to this in your console if you have completed this exercise successfully:
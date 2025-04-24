// Task 1: Declare variables

// Declare a variabe using 'var'
var companyName = "Refood";

// Declare a variable using 'let'
let internName = "John Doe";

// Declare a variable using 'const'
const internshipDuration = 3; // in months


// Task 2: Print values to the console
console.log("Company Name:", companyName);  // Output: Company Name: Refood
console.log("Intern Name:", internName);    // Output: Intern Name: John Doe
console.log("Internship Duration:", internshipDuration, "months"); // Output: Internship Duration: 3 months


// Task 3: Update variables
// Update the variable declared with 'var'
companyName = "Refood Inc.";
console.log("Updated Company Name:", companyName); // Output: Updated Company Name: Refood Inc.

// Update the variable declared with 'let'
internName = "Jane Smith";
console.log("Updated Intern Name:", internName); // Output: Updated Intern Name: Jane Smith



// Task 4: Attempt to update the variable declared with 'const'
// This will throw an error because 'const' variables cannot be reassigned
// internshipDuration = 4; // Uncommenting this line will cause an error: TypeError: Assignment to constant variable.
// console.log("Updated Internship Duration:", internshipDuration, "months"); // This line will not execute if the above line is uncommented


// task 4: Use different data types
let age = 25; // number
let isIntern = true; // boolean
let skills = ["JavaScript", "HTML", "CSS"]; // array
let address = { city: "New York", state: "NY" }; // object

console.log(age, isIntern, skills, address); // Output: 25 true [ 'JavaScript', 'HTML', 'CSS' ] { city: 'New York', state: 'NY' }

// task 5: typeof Check
console.log(typeof companyName); // Output: string
console.log(typeof internName); // Output: string
console.log(typeof internshipDuration); // Output: number
console.log(typeof age); // Output: number
console.log(typeof isIntern); // Output: boolean
console.log(typeof skills); // Output: object (arrays are of type 'object' in JavaScript)
console.log(typeof address); // Output: object
console.log(typeof null); // Output: object (this is a known quirk in JavaScript)
// console.log("Hello World");

// Returns a number from 0-1, but doesn't include 1. 0 being inclusive, 1 being exclusive.
// let randomNumber = Math.random(); //0.0-1

// if (randomNumber < 0.50) {

// You can put any piece of code, as long as the condition was met.
//     console.log("Condition was Met");
//     console.log(randomNumber);

// }

// Using the DOM Inspector, we confirmed that the condition was met, due to 0.99 being greater than 0.5
// if (randomNumber >= 0.5) {

//     console.log('Condition Was Met');
//     console.log(randomNumber); 
// }


// const dayOfWeek = 'Saturday';

// // Using the strict equality operator, which checks whether the two operans are equal 
// if (dayOfWeek === 'Monday'){

//     console.log("Yay it's Monday!");
// } else if (dayOfWeek === 'Friday'){

//     console.log("Yay it's Friday");
// } else if(dayOfWeek === 'Saturday'){

//     console.log("You have the correct Day from the variable");
// }

// Using "if else" statements (true/false)
// const age = prompt("Enter An Age");

// if (age < 5) {

//     console.log("Hey, you're a baby!");

// } else if (age < 10) {

//     console.log("Hey, you're just a kid!");
// } else if (age < 35) {

//     console.log("You're getting older.");
// }
// IF ALL OTHER CONDITIONS FAIL - ELSE.
// else {

//     console.log("You are over the age of 35.");
// }

// Working with case switch statements and breaks.  Compared to a "else if" statement, switch statements are more readable and less tedious to input.  You must always put a break after each case statement.

// const fruit = 'Papayas';

// switch (fruit){

//     case 'Oranges':
//         console.log("Oranges are $0.59 a pound");
//         break;
//     case 'Bananans':
//         console.log("Bananas are $0.10 a pound");
//         break;
//     case 'Avacados':
//         console.log("Avacados are expensive!");
//         break;
//     case 'Papayas':
//         console.log("Papayas are $0.70 a pound");
//         break;
//     default:
//         console.log("Last Resort If All Conditions Fail");

// }

// Nested If Conditions Section
// const password = prompt("Enter in a new password");

// if (password.length >= 6) {
// Returns if the value is not found (-1).  The blank space is error checking the end user.
//     if (password.indexOf('') === -1) {
//         console.log("Valid Password");
//     } else {
//         console.log("Password Cant Have Spaces");
//     }
// If you input only 5 characters, "password is too short" is what will appear. 
// } else {
//     console.log("Password is too short");
// }

// Functions Section; Creating the function and calling it, as shown below.

function singSong() {

    console.log("DO");
    console.log("RE");
    console.log("MI");

}

singSong()
singSong()
singSong()

// 1 arugment
function greet(firstName) {

    console.log(`Hey There, ${firstName}`);
}

// 2 arugments
greet('Boomer');

function greet(firstName, lastName) {

    console.log(`Hey There, ${firstName} ${lastName}`);
}
// 3 arugments
greet('Boomer');

function greet(firstName) {

    console.log(`Hey There, ${firstName}`);
}

greet1('Boomer','Sooner');
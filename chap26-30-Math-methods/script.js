// // 1. Write a program that takes a positive integer from user &
// // display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

// var userInput = +prompt("enter positive integer ");
// document.write(`number : ${userInput}<br>`);
// document.write(`round off value : ${(Math.round(userInput))}<br>`);
// document.write(`floor value : ${(Math.floor(userInput))}<br>`);
// document.write(`ceil value : ${(Math.ceil(userInput))}<br><br>`);

// // 2. Write a program that takes a negative floating point
// // number from user & display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number


// var userInputs = +prompt("enter neg  floating integer ");
// document.write(`number : ${userInputs}<br>`);
// document.write(`round off value : ${(Math.round(userInputs))}<br>`);
// document.write(`floor value of the number : ${(Math.floor(userInputs))}<br>`);
// document.write(`ceil value of the number : ${(Math.ceil(userInputs))}<br><br>`);

// // 3. Write a program that displays the absolute value of a
// // number.
// // E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// var userInput = +prompt("enter number");
// document.write(`The absolute value of ${userInput} is  ${(Math.abs(userInput))}<br><br>`);

// // 4. Write a program that simulates a dice using random()
// // method of JS Math class. Display the value of dice in your
// // browser.:

// var dice = Math.random() * 7;
// var diceTwo = Math.random() * 7;
// document.write("random dice value : ",Math.floor(dice),"<br>");
// document.write("random dice value : ",Math.floor(diceTwo),"<br><br>");


// // 5. Write a program that simulates a coin toss using random()
// // method of JS Math class. Display the value of coin in your
// // browser

// var toss = Math.floor(Math.random()*2);
// document.write(toss,"<br>");
// if(toss > 0){
//     document.write("random coin value : head")
// }else{
//     document.write("random coin value :  tails <br><br>" )
// };

// // 6. Write a program that shows a random number between 1
// // and 100 in your browser.

// var randomValue = Math.floor(Math.random()*101);
// document.write("random number between 1 to 100 is : ",randomValue,"<br><br>");

// // 7. Write a program that asks the user about his weight. Parse
// // the user input and display his weight in your browser.
// // Possible user inputs can be:
// // a. 50
// // b. 50kgs
// // c. 50.2kgs
// // d. 50.2kilograms


// var userInputt = prompt("enter your age");
// document.write("The weight of user is  ",parseInt(userInputt), " kilograms  <br><br>"); 

// // 8. Write a program that stores a random secret number from
// // 1 to 10 in a variable. Ask the user to input a number
// // between 1 and 10. If the user input equals the secret
// // number, congratulate the user.


// var secretNum = Math.floor(Math.random()*11);
// var userInput = +prompt("input a number between 1 and 10");
// if(userInput === secretNum){
//    alert("congratulations you entered the correct number ")
// }else{
//     alert("Try Again")
// } 
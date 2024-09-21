// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.


// function power(a, b) {
//     return Math.pow(a, b);
//   }
  
  
//   console.log(power(2, 3)); 


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2


// function triangleArea(a, b, c) {
  
//     let S = (a + b + c) / 2;
    
   
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    
//     return area;
//   }
  

//   let a = 5, b = 10, c = 7;
//   let area = triangleArea(a, b, c);
//   console.log("The area of the triangle is: " + area);
  

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


// Function to calculate average of three marks
// function calculateAverage(marks1, marks2, marks3) {
//     let average = (marks1 + marks2 + marks3) / 3;
//     return average;
//   }

//   function calculatePercentage(marks1, marks2, marks3, totalMarks) {
//     let obtainedMarks = marks1 + marks2 + marks3;
//     let percentage = (obtainedMarks / totalMarks) * 100;
//     return percentage;
//   }
  
//   function mainFunction() {
//     // Take user input for marks
//     let marks1 = parseFloat(prompt("Enter marks for subject 1: "));
//     let marks2 = parseFloat(prompt("Enter marks for subject 2: "));
//     let marks3 = parseFloat(prompt("Enter marks for subject 3: "));
//     let totalMarks = parseFloat(prompt("Enter total marks for all 3 subjects combined: "));
  
//    
//     let average = calculateAverage(marks1, marks2, marks3);
//     let percentage = calculatePercentage(marks1, marks2, marks3, totalMarks);
  
//   
//     console.log("Average Marks: " + average.toFixed(2));
//     console.log("Percentage: " + percentage.toFixed(2) + "%");
//   }
  
//   mainFunction();



// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


// function customIndexOf(str, char) {
//     // Iterate over the string to find the index of the character
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;  // Return the index when the character is found
//       }
//     }
//     return -1;  // Return -1 if the character is not found
//   }
  
//   // Example usage:
//   let str = "Hello World";
//   let char = "o";
  
//   let index = customIndexOf(str, char);
//   console.log("Index of '" + char + "' is: " + index); // Output: 4
  
// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// function removeVowels(sentence) {
//     // Define a string containing all vowels
//     let vowels = "aeiouAEIOU";
    
//     // Create an empty string to store the result
//     let result = "";
    
//     // Loop through each character in the sentence
//     for (let i = 0; i < sentence.length; i++) {
//       // If the current character is not a vowel, add it to the result
//       if (!vowels.includes(sentence[i])) {
//         result += sentence[i];
//       }
//     }
    
//     return result;
//   }
  
//   // Example usage:
//   let sentence = "Hello World, this is JS!";
//   let result = removeVowels(sentence);
//   console.log("Sentence without vowels: " + result);
  

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.


// function calculateNotes(amount) {
//     // Calculate the number of 100, 50, and 10 currency notes
//     let hundredNotes = Math.floor(amount / 100);
//     amount %= 100;
  
//     let fiftyNotes = Math.floor(amount / 50);
//     amount %= 50;
  
//     let tenNotes = Math.floor(amount / 10);
  
//     return {
//       hundredNotes: hundredNotes,
//       fiftyNotes: fiftyNotes,
//       tenNotes: tenNotes
//     };
//   }
  
//   function mainFunction() {
//     // Take user input for the amount to be withdrawn
//     let amount = parseInt(prompt("Enter the amount to be withdrawn (in multiples of 10): "));
  
//     // Ensure the amount is valid and in multiples of 10
//     if (amount % 10 !== 0) {
//       console.log("Please enter a valid amount in multiples of 10.");
//       return;
//     }
  
//     // Call the calculateNotes function
//     let notes = calculateNotes(amount);
  
//     // Display the result
//     console.log("Number of 100 notes: " + notes.hundredNotes);
//     console.log("Number of 50 notes: " + notes.fiftyNotes);
//     console.log("Number of 10 notes: " + notes.tenNotes);
//   }
  
//   // Call the main function
//   mainFunction();
  
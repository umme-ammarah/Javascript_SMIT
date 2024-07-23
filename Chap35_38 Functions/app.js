// 1. Write a function that displays current date & time in your
// browser.

// function time(){
//     var date = new Date()
//     document.write(date)
// }
// time(),"<br><br>";


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// var firstName = prompt("enter your first name:");
// var lastName = prompt("enter your last name:");
//  function greet(firstName,lastName){
//     alert(`hello ${firstName} ${lastName} have a nice day`);
//  }
// greet(firstName,lastName);


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.




// var firstNum = +prompt("enter your first number:");
// var secondnNum = +prompt("enter your second number:");
//  function sum(firstNum,secondnNum){
//     alert(`sum of  ${firstNum} and ${secondnNum} is  ${(firstNum+secondnNum)}`)
//  }
// sum(firstNum,secondnNum);


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// var firstNum = +prompt("enter your first number:");
// var operator = prompt("which operator you want to use:");
// var secondnNum = +prompt("enter your second number:");
// function Calculator(firstNum,operator,secondnNum){
// if(operator==="+"){
//      alert(`  ${firstNum} + ${secondnNum} =  ${firstNum+secondnNum}`)

// }else if (operator==="-"){
//     alert(` ${firstNum} - ${secondnNum} = ${firstNum-secondnNum}`)

// }else if (operator==="*"){
//     alert(` ${firstNum} * ${secondnNum} = ${firstNum*secondnNum}`)

// }else if (operator==="/"){
//     alert(` ${firstNum} / ${secondnNum} = ${firstNum/secondnNum}`)

// } else if(operator==="%"){
//     alert(` ${firstNum} % ${secondnNum} = ${firstNum%secondnNum}`)

// }else{
//     alert("this operator is not available")
// }}

// Calculator(firstNum,operator,secondnNum);



// 5. Write a function that squares its argument.
// var num = +prompt("enter number")
// function square(num){
//     alert(num*num)
//     return(num*num)
    
// }
// square(num);


// 6. Write a function that computes factorial of a number.
// var input = +prompt("number for factorial : ");
// function factorial(input){
//       var ans  =  1;
//       if(input === 0){
//         return input

//       }
//       else if(input === 1){
//         return ans;

//       }else{
//         for(var i = input ;i>=1;i--){
//             ans *= i;

//       }
//       return ans;
     
//       } 
// }
// ans = factorial(input);
// alert(`factorial of ${input} is ${ans}`);


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// var firstNum = +prompt("enter your first number:");
// var secondnNum = +prompt("enter your second number:");

// function counting(firstNum,secondnNum){
//     for(var i = firstNum; i<=secondnNum;i++){
//         document.write(i + " ")
//     }
  
// }   

// counting(firstNum,secondnNum);



// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// var base  = +prompt("enter  base value :")
// var perpendicular  = +prompt("enter  perpendicular value :")
// function calculateHypotenuse(){
//             function calculateSquare(num){
//                num *= num;
//                 return num;

//             }

//             var hypotenuse = Math.sqrt(calculateSquare(base)+calculateSquare(perpendicular))
         
//             alert(`hypotenuse of a right angle triangle bof given base is ${base} and given perpendicular is ${perpendicular} and the answer is ${hypotenuse} `)
// }
// calculateHypotenuse();


// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables


// var width =+prompt("enter width");
// var height=+prompt("enter height");

// function rectangle(width,height){
//     var  rectangleCal = width*height
//     return rectangleCal;

// }
// var result = rectangle(width,height)
// alert("area of ractangle is "+ result);


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'



// function stringConverter (input){
//     var input = prompt("enter  any  sentence ");
//     var splits = input.split(" ");
//     var valueStore="" ;
//     for(var i = 0 ; i<splits.length;i++){
//         valueStore+=splits[i].charAt(0).toUpperCase() + splits[i].slice(1).toLowerCase();
// }  return valueStore;
// }
// var result = stringConverter();
// document.write(result);







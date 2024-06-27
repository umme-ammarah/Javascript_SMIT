 // 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
//  let userFirstName = prompt("enter your first name");
//  let userLastName = prompt("enter your Last name");
//  var concat = userFirstName +" "+ userLastName;
//  document.write('hello ',concat,"  nice to meet you <br><br>");

//  2. Write a program to take a user input about his favorite
//  mobile phone model. Find and display the length of user
//  input in your browser


// let userMobile = prompt(`enter your favorite mobile phone model` );
// document.write("your favorite phone is : ",userMobile,"<br>");
// document.write("length of your input is : ",userMobile.length, "<br><br>");

// // 3. Write a program to find the index of letter “n” in the word
// // “Pakistani” and display the result in your browser .
// let strings = 'Pakistani';
// document.write("Pakistani <br>")
// document.write("index of 'n' is : ",strings.indexOf("n"),"<br<br>");

// // 4. Write a program to find the last index of letter “l” in the
// // word “Hello World” and display the result in your browser.

// let value = 'Hello World';
// document.write(value,"<br>");
// document.write('index of last l is :',value.lastIndexOf("l"),"<br<br>");


// // 5. Write a program to find the character at 3rd index in the
// // word “Pakistani” and display the result in your browser.

// let valuee= 'Pakistani';
// document.write(valuee,"<br>");
// document.write("char  at 3rd index is : ",valuee.charAt(3),"<br<br>");

// //6. Repeat Q1 using string concat() method.

// var userFirstName = prompt("enter your first name");
// var userLastName = prompt("enter your Last name");
// document.write('hello ',userFirstName.concat(" ",userLastName),"  nice to meet you <br><br>");

// // 7. Write a program to replace the “Hyder” to “Islam” in the
// // word “Hyderabad” and display the result in your browser.

// var word = 'Hyderabad';
// var replace = word.replace("Hyder","Islam");
// document.write("befor replacment original value : ",word,"<br>");
// document.write("After replacment : ",replace,"<BR><br>");

// // 8. Write a program to replace all occurrences of “and” in the
// // string with “&” and display the result in your browser.
// // var message = “Ali and Sami are best friends. They play cricket and
// // football together.”;

// var message =" “Ali and Sami are best friends. They play cricket and football together.”";
// document.write("befor replacment “and” in the string with “&”  is: ",message,"<br>");
// document.write("After replacment : ",message.replaceAll("and","&"),"<br><br>");

// // 9. Write a program that converts a string “472” to a number
// // 472. Display the values & types in your browser.

// let numberValue = '472';
// document.write("Value  : ",numberValue,"<br> Type : ",typeof(numberValue),"<br>");
// document.write("Value  : ",numberValue,"<br> Type : ",typeof((Number(numberValue))),"<br><br>");


// // 10. Write a program that takes user input. Convert and
// // show the input in capital letters.

// var userInputt = prompt("enter any word");
// let capital =  userInputt.toUpperCase();
// document.write("user input : ", userInputt , "<br>");
// document.write("Upper Case  : " ,capital, "<br><br>");

// // 11. Write a program that takes user input. Convert and
// // show the input in title case.

// var userInput = prompt("enter any word");
// var firstLetter = userInput.slice(0,1);
// var remaining = userInput.slice(1);
// var titalCase =  firstLetter.toUpperCase() + remaining.toLowerCase();
// document.write("user input : ",userInput,"<br>");
// document.write("tital case : " , titalCase, "<br><br>")


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var number = 35.36;
// document.write("NUMBER : ",number,"<br>");
// let dotRemove = number.splice(2,1,0);
// var numToStr = dotRemove.toString();
// document.write("Result : ", numToStr,"<br>");//////////////////////////////////////



// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var input = prompt("enter your name:")
var charValue ;
var flag= false
for(var i = 0;i<input.length;i++){
    charValue = input[i].charCodeAt(0);
    if(charValue === 33 ||charValue === 44 ||charValue === 46 ||charValue === 64){
        alert("please enter valid username")
        flag = true
        
    
    }
}
if(flag===false){
    alert("hello "+input)
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var items =  ['cake','apple pie','cookie','chips','patties'];
// var userInput = prompt("Welcome to  ABC bakery What do you want to order?");
// var flag = false;
// var caseSensitive =userInput.toLowerCase(); 
// for(var i = 0;i<items.length;i++){
//     if(caseSensitive===items[i]){
//    alert(items[i] + " is available at index " + i + " in our bakery");
//         flag=true;
//     }

// }
// if(flag===false){
// alert("We are sorry. " + caseSensitive + " is not available in our bakery");

// }

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var input =prompt("enter password");
// document.write("Entered password : ",input);

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// document.write(university,"<br><br>")
// var array = university.split("");
// for(var i=0; i<array.length; i++){
//     document.write(array[i],"<br>")
// } 

// 17. Write a program to display the last character of a user
// input.

// var userinput  = prompt("enter anyword :")
// document.write("user input :  ",userinput,"<br>");
// document.write("last character of ypur input is : ",userinput.charAt(userinput.length-1));

// // 18. You have a string “The quick brown fox jumps over the
// // lazy dog”. Write a program to count number of
// // occurrences of word “the” in given string.
  
// var stringValue  = "The quick brown fox jumps over the lazy dog";
// var match = stringValue.match(/the/gi).length;
// document.write("occurrences of word “the” in given string is :",match)
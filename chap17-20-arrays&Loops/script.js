// // 1. Declare and initialize an empty multidimensional array.
// // (Array of arrays)


var multiArray = [[],[],[[],[]]];

// // 2. Declare and initialize a multidimensional array
// // representing the following matrix:

var multiDimensionalArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var i = 0;i<multiDimensionalArray.length;i++){
    document.write(multiDimensionalArray[i],"<br>")
}
document.write(`--------***--------- <br>`);

// // 3. Write a program to print numeric counting from 1 to 10.

for(var i = 1; i<=10;i++){
    document.write(i ,"<br>")
}
document.write(`--------***--------- <br>`);

// // 4. Write a program to print multiplication table of any
// // number using for loop. Table number & length should be
// // taken as an input from user.

var tableNumber = +prompt("enter a number to shows its table");
var length = +prompt("now enter length");
document.write(`Multiplication table of ${tableNumber} <br>`);
document.write(`length of table is ${length} <br>`);

for(var i = 1;i<=length;i++){
    document.write(`${tableNumber} X ${i} = ${tableNumber*i} <br>`);
}

document.write(`--------***--------- <br>`);


// // 5. Write a program to print items of the following array
// // using for loop:

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for(var i = 1; i<fruits.length;i++){
    document.write(fruits[i],"<br>");
}"<br><br>"

for(var i = 1; i<fruits.length;i++){
    document.write(`Element at index ${i} is ${fruits[i]}<br>`)
}
document.write(`--------***--------- <br>`);


// // 6. Generate the following series in your browser. See
// // example output.
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("Counting: <br><br>")
for(var i = 1; i <= 15; i++){
    document.write(i , " ");
}document.write(" <br><br>");

document.write(" Reverse Counting: <br><br>")
for(i = 10; i>=1;i--){
    document.write(i, " ");
}document.write(" <br><br>");


document.write("Even Numbers: <br><br>")
for(i = 0; i<=20;i= i=i+2 ){
    document.write(i, " ");
}document.write(" <br><br>");

document.write("Odd Numbers: <br><br>")
for(i = 1; i<=20;i= i=i+2 ){
    document.write(i, " ");
}document.write(" <br><br>");

document.write("Series: <br><br>")
for(i = 2; i<=20;i= i=i+2 ){
    document.write(i,"k" ," ");
}document.write(" <br><br>");
document.write(`--------***--------- <br>`);

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.:

var bakeryArray=['cake','apple pie','cookie','chips','drinks','patties']
var userInput = prompt("Welcome to abc bakery.what do you want to  order?");
var flag =false;
let serach=userInput.toLowerCase();
for(var i = 0;i<bakeryArray.length;i++){
    if(bakeryArray[i]===serach){
        flag = true;
       document.write(`${userInput} is available at index ${i} in our bakery`)
        break;
       
    }
}
if(flag===false){
    document.write(`sorry ${userInput}is not available at the moment`);
}
document.write(`--------***--------- <br>`);

// 8 .Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var array = [24, 53, 78, 91, 12];
var flag = array[0];
for(var i = 0;i<array.length;i++){
    if(array[i]>flag){
      flag=array[i]
    }

}
document.write(`Array items are ${array}<br>`);
document.write(`largest num is ${flag} <br><br>`);
document.write(`--------***--------- <br>`);


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var array = [24, 53, 78, 91, 12];
var flag = array[0];
for(var i = 0;i>array.length;i++){
    if(array[i]>flag){
      flag=array[i]
    }
}
document.write(`Array items are ${array}<br>`);
document.write(`smallest num is ${flag} <br><br>`);
document.write(`--------***--------- <br>`);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

for(var i = 5;i<=100; i =i+5){
    document.write(i," ","<br>")
};
document.write(`--------***--------- <br>`);

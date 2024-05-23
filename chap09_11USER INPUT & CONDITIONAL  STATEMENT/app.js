// 0
var city =  prompt("enter any city name");
if(city==="karachi"||city==="Karachi"){
    alert("welcome to the city of lights");
}

// 02

var gender = prompt("Enter your gender");
if(gender==="male"||gender==="Male"){
    alert("Hello sir !!");
}if(gender==="female"||gender==="Female"){
    alert("hello mam !!");
}

// 03

var color = prompt("enter a traffic signal color");
if(color==="Red"|| color==="red"){
    alert("you must stop ");
}if(color==="yellow"|| color==="Yellow"){
    alert("ready to move ");
}if(color==="Green"|| color==="green"){
    alert("move now ");
};


// 04

var remainingFuel = prompt("enter remaining fuel in your car");
if(remainingFuel == "0.25litres"){
    alert("please refill the fuel in your car");
}else{
    alert("you are good to go");
};

// 05

 var a = 4;
if (++a === 5){
alert("given condition for variable a is true"); //true
}var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");  
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true"); //true
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true"); //true
};

 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals"); //true
}
 if (true){
alert("True"); //true
}
if (false){
alert("False");
} if("car" < "cat"){
    alert("car is smaller than cat"); //true
    }


// 06

var subject_01 = +prompt("enter the mark of subject one");
var subject_02 = +prompt("enter the mark of subject two");
var subject_03 = +prompt("enter the mark of subject three");
 var totalMarks = 300;
 var marksObtained = subject_01+subject_02+subject_03;
 var percentage = marksObtained/totalMarks*100;
 document.write("<h1>Marksheet</h1><br>",
 "Total marks : ",totalMarks,"<br>",
 "Marks Obtained : ",marksObtained,"<br>",
 "percentage : " , percentage,"<br>",

);

 if (percentage>=80){
    document.write("Grade : A-one <br> Remarks : Excellent <br> ");
 }else if (percentage>=70){
    document.write("Grade : A <br> Remarks : Good <br>");
 }else if (percentage>=60){
    document.write("Grade : B <br> Remarks : You need to improve <br>");
 }else if (percentage<60){
    document.write("Grade : Fail <br> Remarks : sorry <br> ");
 }


//07

var secretNum = 10;
var guess = +prompt("guess my secret number between 1 to 10 "); 
if(guess == secretNum){
    alert("Bingo ! correct answer");
}else if (guess+1 ==secretNum){
    alert("“Close enough to the correct answer”");
}else{
    alert("try again");
}

// 08

var giveNum = +prompt("enter any number");
if(giveNum%3==0){
    alert("your given number is divisible by 3");
}else{
    alert("not a divisible of 3");
}

//09
 
var giveNum = +prompt("enter any number");
if(giveNum%2==0){
    alert(giveNum + " is an even number");
}else{
    alert(giveNum + " is odd number");
}


10

var temperature = +prompt("enter your city's temperature");
if(temperature >=  40){
    alert("“It is too hot outside.”");
}else if(temperature >=  30){
    alert("“The Weather today is Normal.”");
}else if(temperature >=  20){
    alert("“Today’s Weather is cool.”");
}else if(temperature >=  10){
    alert("“OMG! Today’s weather is so Cool.”");
};

//11

var firstNum = +prompt("enter your first number");
var secondNum = +prompt("enter your second number");
var operation = prompt("enter the operator you want to perform");
if(operation== "+"){
    alert(firstNum  +" + "+secondNum +" = " + (firstNum + secondNum));
}else if(operation== "-"){
    alert(firstNum  +" - "+secondNum +" = " + (firstNum - secondNum));
}else if(operation== "*"){
    alert(firstNum  +" * "+secondNum +" = " + (firstNum * secondNum));
}else if(operation== "/"){
    alert(firstNum  +" / "+secondNum +" = " + (firstNum / secondNum));
}else if(operation== "%"){
    alert(firstNum  +" % "+secondNum +" = " + (firstNum - secondNum));
};
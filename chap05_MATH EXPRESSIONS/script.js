// //     // 01 and 02

let firstNumber = +prompt("enter your first number");
let secondNumber = +prompt("enter your second number");

let addition = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let product= firstNumber * secondNumber;
let division = firstNumber / secondNumber;
let modulus = firstNumber % secondNumber;

document.write("Sum of "+"<b>"+firstNumber+"</b>"+" and "+"<b>"+ secondNumber+"</b>"+ " is ","<b>",addition,"</b>","<br>");
document.write("Subtraction of "+"<b>"+firstNumber+"</b>"+" and "+"<b>"+ secondNumber+"</b>"+ " s ","<b>",subtraction,"</b>","<br>");
document.write("product of "+"<b>"+firstNumber+"</b>"+" and "+"<b>"+ secondNumber+"</b>"+ " is ","<b>",product,"</b>","<br>");
document.write("division of "+"<b>"+firstNumber+"</b>"+" and "+"<b>"+ secondNumber+"</b>"+ " is ","<b>",division,"</b>","<br>");
document.write("modulus of "+"<b>"+firstNumber+"</b>"+" and "+"<b>"+ secondNumber+"</b>"+ " is ","<b>",modulus,"</b>","<br> <br><br><br>");

// // //     03

var value;
document.write("Value after variable declaration is: ","<b>",value,"</b>","<br>");

value = 430;
document.write("initial value is: ","<b>",value,"</b>" ,"<br>");

value++ ;
document.write("Value after increment is: ","<b>",value,"</b>" ,"<br>");

let newValue = value+7;
document.write("value after addition is :  ","<b>",newValue,"</b>" ,"<br>");

newValue--;
document.write("Value after decrement is: ","<b>",newValue,"</b>" ,"<br>");

let reminder = newValue % 3;
document.write("Value of reminder is: ","<b>",reminder,"</b>" ,"<br><br><br><br><br>");



// //04

let ticketPrice = 600;
document.write ("price of single ticket is ","<b>",ticketPrice,"</b>" ,"<br>");
let newPrice = ticketPrice*5;
document.write("cost of 5 ticket is ","<b>",newPrice,"</b>" ,"<br><br><br> ");



// // 05
var number = 5;
document.write("<b>TABLE OF ",number,"</b><br>");
document.write(number," x 1 = " ,number*1,"<br>");
document.write(number," x 2 = " ,number*2,"<br>");
document.write(number," x 3 = " ,number*3,"<br>");
document.write(number," x 4 = " ,number*4,"<br>");
document.write(number," x 5 = " ,number*5,"<br>");
document.write(number," x 6 = " ,number*6,"<br>");
document.write(number," x 7 = " ,number*7,"<br>");
document.write(number," x 8 = " ,number*8,"<br>");
document.write(number," x 9 = " ,number*9,"<br>");
document.write(number," x 10 = " ,number*10,"<br><br><br>");

// // 06  


document.write("<b>","The Temperature Converter:","</b><br>");
let celsius = 50 ;
let fahrenheit = 122;
let CelsiusIntoFahrenheit = document.write(celsius,"c is ",(celsius*9/5)+32,"F<br>");
let fahrenheit_Into_Celsius = document.write(fahrenheit,"F  is ",(fahrenheit-32)*5/9,"c<br><br><br>");


// // 07

let price0fItem_01 = 650;
let orderedQuantity0fItem_01 = 3;
let totalCostOfItem_01= price0fItem_01*orderedQuantity0fItem_01;
let price0fItem_02 = 100;
let orderedQuantity0fItem_02 = 7;
let totalCostOfItem_02= price0fItem_02*orderedQuantity0fItem_02;
let shippingCharges = 100;


document.write("Price of item 1 is ",price0fItem_01,"<br>");
document.write("Quantity of Item 1 is ",orderedQuantity0fItem_01,"<br>");
document.write("Price of item 2 is ",price0fItem_02,"<br>");
document.write("Quantity of Item 1 is ",orderedQuantity0fItem_02,"<br>");
document.write("Shipping charges ",shippingCharges," <br>");
document.write("total Cost Of your  order is",totalCostOfItem_01+totalCostOfItem_02+shippingCharges,"<br><br>");

// // 08

document.write("<b>Marksheet</b> <br>");
let totalMarks = 500;
let obtainedMarks = 400;
document.write("Total Marks = " ,"<b>", totalMarks,"</b> <br>");
document.write("obtained marks = ","<b>",  obtainedMarks, " </b> <br>");
let percentage = document.write("percentage = <b>",obtainedMarks/totalMarks*100,"</b> <br> <br><br>");


// // 09

document.write("Curency in PKR <br>");
let usDollar = 10;
let saudiRiyal = 25;
var total = (10*104.80 + 25*28);
document.write("Total Curreny in PKR: <b> " + total,"</b><br><br><br>");


// // 10

var numberValue = 1;
document.write("your initial value is : <b>",numberValue,"</b><br> after adding 5 to the value : <b>",numberValue+5,"</b></br> multiply value by 10 :<b>",newValue*10,"</b><br> divide te value by 2 :<b>",newValue/2,"</b><br><br><br>")

11
let currentYear = 2024;
let bithYear =2002;
let yourAge = document.write("current year : ",currentYear, "<br/> birth year : ",bithYear,"<br> your age : ",currentYear-bithYear,"<br><br><br>");

// //12

let radius = 20;
let circumference = (2*3.142*radius);
let area = (3.142*radius**2);
document.write("radius of a circle is : ",radius,"<br> circumference of the circle is :  ",circumference,"<br> total area of circle is : ",area,"<br><br><br>");

// //13
document.write("<b>The Lifetime Supply Calculator:</b> <br> <br>");
let snake = "cocomo";
let age = 15;
let maxAge = 65;
let takingDays = 3;
var total = (maxAge*takingDays - takingDays*age) ;
 document.write( "<h1>" + "The Lifetime Supply Calculator" + "</h1>"+"Favourite Snake: " + snake + "<br>" + "Current Age: " + age + "<br>" + "Estimated Maximum Age: " + maxAge + "<br>"  + "Amount of snakes per day: "  + takingDays + "<br>"  + "You will need " + total + " " + snake  + " to last you until the ripe old age of " + maxAge);
// 1. Write a program that displays current date and time in
// // your browser.

var date =  new Date();
document.write(date, "<br><br>");

// 2. Write a program that alerts the current month in words.
// For example December.
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var date =  new Date();
var res = month[date.getMonth()];
document.write(res,"<br><br>");

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


var days =  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var date = new Date();
document.write("Today is ",days[date.getDay()],"<br><br>");

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var date = new Date ();
var check = date.getDay();
if(check == 7 ||check == 6 ){
    document.write("its fun day")
}else{
    document.write("working days !!! <br><br>")
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


var date = new Date ();
var check = date.getDate();
if(check>=15){
    document.write("Last days of the month ","<br><br>")

}else{
    document.write("First fifteen days of the month","<br><br>")

}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var date = new Date();
var milisecond = Date.now();
var  min = (milisecond/(1000*60))
document.write("current date : ",date,"<br>");
document.write("millisecond since midnight Jan-1-1970 : ",milisecond,"<br>");
document.write( "minutes since midnight Jan-1-1970 : ",min,"<br><br>")



// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.


var date = new Date();
var hour = date.getHours();
if(hour < 12){
    document.write("Its AM");
}
else{
    document.write("Its PM");
}
document.write("<br><br>")


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var laterDate = new Date("Dec 31, 2020");
document.write(laterDate,"<br><br>")


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var dateToday =  new Date();
var Ramzan = new Date('Mar 11 2024');
var difference = dateToday - Ramzan;
var daysPast  = Math.floor(difference/(1000*60*60*24));
document.write(`${daysPast} days past since  1st Ramadan 2024 <br><br> `);

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var dateTody = new Date();
var beginningOf2015 = new Date('Jan 1 2015');
var differenceBetween = dateToday - beginningOf2015;
var secondsPast = (differenceBetween/(1000));
document.write(`refrence date : ${dateToday}<br>`);
document.write(secondsPast,"  seconds has past since  beginning of 2015 <br><br> ");


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var todayDate = new Date();
var hourAgo = todayDate.getHours();
hourAgo = hourAgo-1
document.write("current date : " + todayDate + "<br>");
todayDate.setHours(hourAgo);
document.write("1 hour ago, it was : " + todayDate,"<br><br>");


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var todayDate = new Date();
var years =  todayDate.getFullYear();
years = years-100;
document.write(`current date :${todayDate} <br> `);
todayDate.setFullYear(years);
document.write(`100 years back,it was : ${todayDate}<br><br>`);


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var userInput = +prompt("enter your age");
var date = new Date();
var  year =date.getFullYear();
year = year - userInput;
document.write("your age  : "+userInput,"<br>");
document.write("your birth  year is :"+year,"<br><br>");



// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

var usernamee = "Ammarah";
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var  date = new  Date();
var currentMon = date.getMonth();
var noOfUnits = 410;
var ChargePerUnit = 16;
var latePaymentCharge = 350;
document.write("<h2>K-Electric  Bill</h2><br>");
document.write("User Name  :  ",usernamee,"<br>");
document.write("current month  :  "+ months[currentMon],"<br>");
document.write(" No of Units :",noOfUnits,"<br>");
document.write(" charge per unit :",ChargePerUnit,"<br>");
document.write(" Late Payment Surcharge :",latePaymentCharge,"<br>");
document.write("Net Amount Payable (within Due Date) : ",noOfUnits*ChargePerUnit,"<br>");
document.write("Gross Amount Payable (after Due Date) :" ,noOfUnits*ChargePerUnit+latePaymentCharge,"<br><br>")

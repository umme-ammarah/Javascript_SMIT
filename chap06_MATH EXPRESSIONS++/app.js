// // 01
// var number = +prompt("enter any number");
// document.write("<b>Result</b> <br> The value of a number is :",number,"<br>....................................<br>");
// document.write("The value of number  is ",++number,"<br>now the value of number is : ",number,"<br><br><br>");
// document.write("The value of number  is ",number++,"<br>now the value of number is : ",number,"<br><br><br>");
// document.write("The value of number  is ",--number,"<br>now the value of number is : ",number,"<br><br><br>");
// document.write("The value of number  is ",number--,"<br>now the value of number is : ",number,"<br><br><br>");

// // 02

// var a = 2; 
// var b = 1;
// var result = --a - --b + ++b + b--;
// // var result = --a; output 1
// // var result= --a - --b; output 1
// // var result= --a - --b + ++b;  output 2
// // var result=--a - --b + ++b + b--; output 3
// document.write("a is : <b>",a,"</b></br>");
// document.write("b is : <b>",b,"</b></br>");
// document.write("result is : <b>",result,"</b></br></br></br>");

// //03

var user_name = prompt("enter your name");
alert("hello "  , user_name , " nice to meet you");

// // 04

// var table =prompt("Enter a table number you want to print :" ,5);
// var increment =1;
// document.write("<b> Table of ",table,"</b></br>"
//     ,table," x " , increment, " = ",table*increment ,"<br>"
//     ,table," x " , ++increment , " = ",table*increment,"<br>"
//     ,table," x " , ++increment , " = ",table*increment,"<br>"
//     ,table," x " , ++increment , " = ",table*increment,"<br>"
//     ,table," x " , ++increment , " = ",table*increment,"<br>"
//     ,table," x " , ++increment , " = ",table*increment,"<br>"
//     ,table," x " , ++increment , " = ",table*increment,"<br>"
//     ,table," x " , ++increment , " = ",table*increment,"<br>"
//     ,table," x " , ++increment , " = ",table*increment,"<br>"
//     ,table," x " , ++increment , " = ",table*increment,"<br> <br><br>"
// );

// // 05

// var subject_one = prompt("Enter your first subject :");
// var subject_two = prompt("Enter your second subject :");
// var subject_three = prompt("Enter your third subject :");
// var first_marks = +prompt("Enter your marks of "+ subject_one);
// var second_marks = +prompt("Enter your marks of "+ subject_two);
// var third_marks = +prompt("Enter your marks of "+ subject_three);
// var total_marks = 100;
// var all_subject_total = 100*3;
// var obtained_marks =first_marks+second_marks+third_marks;
// var percentageOfFirst = first_marks/all_subject_total*100;
// var percentageOfSecond = second_marks/all_subject_total*100;
// var percentageOfthird = third_marks/all_subject_total*100;
// var percentage = obtained_marks/all_subject_total*100;
// document.write("<table border = '1px'>"+
//     "<th>"+"Total Marks"+"</th>"+
//     "<th>"+"obtained marks"+"</th>"+
//     "<th>"+"percentage"+"</th>",
   
//     "<tr>"+
//     "<td>",subject_one,"</td>"+
//     "<td>",first_marks,"</td>"+
//     "<td>",percentageOfFirst,"%","</td>"+
//     "</tr>"+
//     "<tr>"+
//     "<td>",subject_two,"</td>"+
//     "<td>",second_marks,"</td>"+
//     "<td>",percentageOfSecond,"%","</td>"+
  

//     "</tr>"+
//     "<tr>"+
//     "<td>",subject_three,"</td>"+
//     "<td>",third_marks,"</td>"+
//     "<td>",percentageOfthird,"%","</td>"+
    
//     "</tr>"+
    
//     "</tr>"+
//     "<tr>"+
  
//     "<td>","</td>"+
//     "<td><b>",obtained_marks,"</b></td>"+
//     "<td><b>",percentage,"%","</b></td>"+
//     "</tr>"+

   
// "</table>");
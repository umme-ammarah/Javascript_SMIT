//01
var studentNames = ``;

//02
var objectNotation = {

};

//03

var stringArray = ['ammarah','key','student','mom','poops'];


//04

var numberArray = [1,2,3,4,5];

//05

var booleanArray = [true,false];

//06
var mixedArray = [1,'one',2,'two,',3];

//07
var qualifications =['<b>Qualifications :</b><br><br>'+'1) SSC <br>'+'2) HSC <br>'+'3)  BCS <br>'+'4) BS <br>'+'5) BCOM <br>'+'6) MS <br>'+' 7) M.PHIL <br>'+'8) PHD <br><br><br><br>'];
document.write(qualifications);

//08
var student = ['Ammarah','Fatima','Hanif'];
var score = [250,400,480];
var totalMarks = 500;
document.write("Score of <b> ",student[0], '</b> is <b>',score[0], '</b> and percentage is <b>',(score[0]/totalMarks)*100,"% </b><br>" );
document.write("Score of <b> ",student[1], '</b> is <b>',score[1], '</b> and percentage is <b>',(score[1]/totalMarks)*100,"% </b><br>" );
document.write("Score of <b> ",student[2], '</b> is <b>',score[2], '</b> and percentage is <b>',(score[2]/totalMarks)*100,"% </b><br><br>" );

//09

// alert("There are total 5 colors:")
// var colors = ['black ' , ' pink ' , ' blue ',' green ',' purple '];
// document.write(colors+"<br>");

// var beginning = prompt("enter any color you want to add to the beginning");
// colors.unshift("<b>"+beginning+"</b>");
// document.write(colors+ "<br>");

// var end = prompt("enter any color you want to add to the end");
// colors.push("<b>"+end+"</b>");
// document.write(colors+"<br>");

// var beginningAgain = prompt("enter any two color you want to add to the beginning");
// var beginningAgain2 = prompt(" enter second color");
// colors.unshift("<b>"+beginningAgain+"</b>");
// colors.unshift("<b>"+beginningAgain2+"</b>");
// document.write(colors+ "<br>");

// colors.shift(0);
// document.write(colors+ "<br>");

// colors.pop();
// document.write(colors+ "<br>");


// var ColorIndex = +prompt("At which index you wants to add a color");
// var ColorName = prompt("which color you want to add");
// colors.splice(ColorIndex,0, "<b>"+ColorName+"</b>");
// document.write(colors+ "<br>");

// var deleteIndex = +prompt("At which index you wants to delete a color");
// var deleteNumbr = +prompt("how many colors you want to delete");
// colors.splice(deleteIndex,deleteNumbr);
// document.write(colors+ "<br><br><br>");

10

var names = ['ammarah','umair','sehrish','bisma','hanif'];
document.write(names,"<br>");
names.sort();
document.write(names,"<br><br><br>");  //for numbers we have to use function in method thats why i use names instead of numbers

//11

var cities =['karachi','lahore','quetta','peshawar','naran','kashmir'];
document.write("Cities list  :<br>",cities,"<br>");

var selectedCities = cities.slice(2,5);
document.write("selected cities<br> ",selectedCities,"<br><br><br>");

//12
var arr = ['this','is','my','cat'];
document.write("Array : ",arr,"<br>");    
var d =arr.join(" ");
document.write("string : ",d,"<br><br><br>");


//13


var fifo = ['keyboard','mouse','printer','monitor'];
var returns =fifo.slice();
document.write("<b>Devices</b><br>",returns,"<br><br>");


//14
 var lifo = ['keyboard','mouse','printer','monitor'];
 var returns = lifo.reverse()
 document.write("<b>Devices</b><br>",returns,"<br><br>");


//15

var phoneManufacturers =['apple','Samsung','Motorola','Nokia','Sony','Haier'];
document.write("<label>","phone manufacturers","</label> "
    ,"<select>",
    "<option>"+phoneManufacturers[0]+"</option>",
    "<option>"+phoneManufacturers[1]+"</option>",
    "<option>"+phoneManufacturers[2]+"</option>",
    "<option>"+phoneManufacturers[3]+"</option>",
    "<option>"+phoneManufacturers[4]+"</option>",
    "<option>"+phoneManufacturers[5]+"</option>",

"</select>")

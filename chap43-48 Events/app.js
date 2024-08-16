// 1. Show an alert box on click on a link.
function clickme(){
    alert("Thanks for  Clicking me  ")
}


//2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
//  deleted.
function del(){
    document.querySelector("#row").remove()

}

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
let num  = 0;
document.getElementById("increase").onclick = function(){
    num +=1;
    document.getElementById("counting").innerHTML=num;
}
document.getElementById("decrease").onclick = function(){
    num -=1;
    document.getElementById("counting").innerHTML=num;
}
document.getElementById("reset").onclick = function(){
    num = 0
    document.getElementById("counting").innerHTML=num;


}


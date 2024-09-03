// i. Get element of id “main-content” and assign them in a variable.
var id =document.getElementById("main-content");

// // ii. Display all child elements of “main-content” element.

var childElements= id.children;
console.log(childElements);

// iii. Get all elements of class “render” and show their innerHTML   in browser.

  var renderElements = document.getElementsByClassName("render");
  for(let i = 0;i<renderElements.length;i++){
     console.log(renderElements[i].innerHTML);
  }

// iv. Fill input value whose element id first-name using javascript.

       var firstName= document.getElementById("first-name").value = "ammarah";
      
       
// v. Repeat part iv for id ”last-name” and “email”.

   var firstName= document.getElementById("last-name").value = "hanif";
    var firstName= document.getElementById("email").value = "syedaammarah00@gmail.com";

// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.

    var formcontent = document.getElementById("form-content");
    console.log(`node type of element having id  form-content is : ${formcontent.nodeType} `);

// ii. Show node type of element having id “lastName” and its child node.

var lastname = document.getElementById("lastName");
console.log(`node  type of element having id “lastName”  is : ${lastname.nodeType} `);
 var lastNameChild = lastname.firstChild;
console.log(`node  type of element having id “lastName” child  is : ${lastNameChild.nodeType} `);

// iii. Update child node of element having id “lastName”.

   lastname.firstChild.nodeValue = "Last Name:  Meezan Bank"
// iv. Get First and last child of id “main-content”.

var mainContent = document.getElementById("main-content");
var firstchild = mainContent.firstChild;
var lastchild = mainContent.lastChild;

// v. Get next and previous siblings of id “lastName”.

var  previousSibling  = lastname.previousElementSibling;
var nextSibling  = lastname.nextElementSibling;

// vi. Get parent node and node type of element having id “email”

var Gmail = document.getElementById("email");
var parentNode = Gmail.parentNode;
var nodetype = Gmail.nodeType;
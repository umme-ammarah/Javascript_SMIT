// // 1. Suppose You have an array of object
// var itemsArray = [
//     {name:"juice",price:"50", quantity:"3"},
//     {name:"cookie",price:"30", quantity:"9"},
//     {name:"shirt",price:"880", quantity:"1"},
//     {name:"pen",price:"100", quantity:"2"}];
//     Calculate total price of each item and all items;

var itemsArray = [
        {name:"juice",price:"50", quantity:"3"},
        {name:"cookie",price:"30", quantity:"9"},
        {name:"shirt",price:"880", quantity:"1"},
        {name:"pen",price:"100", quantity:"2"}];

        var total = 0;
        for(var key in itemsArray){
            var items = itemsArray[key]
            var item_price = items.price*items.quantity;
            console.log(`the price of ${items.name} is ${item_price}`)
            total +=item_price;
        }
        
        
        console.log(`The total price of everything is ${total}`);
        

//  2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.


var profiles = {
    name : "ammarah",
    email : "syedaammarah00@Gmail.com",
    pass : "abc",
    age :  22,
    gender : "female",
    city : "karachi",
    country : "pakistan"
}
if("age" in profiles){
     console.log("The property 'age' exists in the object.")
}
else{
    console.log("The property 'age'  does not exists in the object.")
}
console.log("country" in profiles);
console.log("firstname" in profiles);
console.log("lastname" in profiles);


// 3. Create a constructor function with some properties. Now
// create multiple records using the constructor.

function student(name , age,city,gender){
    this.name = name;
    this.age = age;
    this.city = city ;
    this.gender = gender;

}

var student1 = new student("ammarah",22,"khi","female");
var student2 = new student("hanif",50,"isl","male");
var student3 = new student("fatima",23,"lhr","female");
// if  you only want to add in one record
student1.email = "syedaammarah00@gmail.com",
// if you want to  add in construtor  function
student.prototype.city = "pakistan"
console.log(student1)
console.log(student2)
console.log(student3)

// 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:

//  use select box for education and profession,
//  use radio box for gender

// Bonus : use can use localStorage to save records.
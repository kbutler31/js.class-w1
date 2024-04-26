
/-console.log("Step 1:  Number of Seats on a Plane");-/
var numberofSeats = 200;
console.log(numberofSeats);

/-console.log("Step 2:  Cost of Groceries");-/
var costofGroceries = 0.00;
console.log(costofGroceries);

console.log("Step 3:  Middle Initial");
let middleInitial = "F";
console.log(middleInitial);

console.log("Step 4:  Is it Hot Outside?");
var temperature = 75;
if (temperature > 75) {
    console.log("It is Hot Outside!");
}else{
    console.log("It is not Hot Outside");
};


console.log("Step 5:  First Name");
let firstName ='john';
console.log(firstName);

console.log("Step 6:  Street Address");
let streetAddress = "123 Main St";
console.log(streetAddress);


console.log('Remove Plane Seats:');
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
var numberofSeats = 200;
console.log(numberofSeats - 2);

console.log('Buy a Candy Bar:');
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
var costofGroceries = 0.00;
console.log(costofGroceries + 2.15);

    console.log('Fix a Birth Certificate:');
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
const originalString ="F"
const newString = originalString.replace(/F/i, "A");
console.log(newString);
    console.log('Changing Seasons:');
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
var temperature = 90;
if (temperature > 75) {
    console.log("It is Hot Outside!");
}else{
    console.log("It is not Hot Outside");
};

    console.log('Full Name:');
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
var lastName = "smith";
var fullName = firstName + " " + newString + " " + lastName;
console.log(fullName);


    console.log('Introduce a Customer:');
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
console.log("This is " + fullName + " who lives at " + streetAddress);

var i = 0;

 do{
    if(i % 3 === 0){
       console.log(i);
    }
    i++;
 }
 while (i <= 99);
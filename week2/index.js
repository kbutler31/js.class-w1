console.log(`--------------------------
Question 1: Driving the speed limit.. ? \n`);

/**
 * Step 1: Create two variables: speedLimit and mySpeed
 * Step 2: Set their values to numbers between 1 and 100.
 * 
 * Step 3: Conditionals:
 *             a. Using a conditional, determine if mySpeed is greater than the speedLimit
 *             b. If true, print "Slow Down! Mom is mad!" to the console
 *             c. If mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
 *             d. If mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */
var speedLimit = 50
var mySpeed = 50
if (mySpeed > speedLimit) {
   console.log("Slow Down! Mom is mad!");
} else if (mySpeed < speedLimit) {
   console.log("Speed up! Dad is mad!");
} else if (mySpeed == speedLimit) {
   console.log("Everyone is happy!");
}{
   
}{
   
}

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2: Is it time to wake up for work? \n`);

/**
 * Step 1: Create two variables, alarmSet and weekDay
 * Step 2: Set them to a boolean value
 * 
 * Step 3: Create a conditional... // if (true) {do thing} 
 *         to do something if the alarm is or isnt set & it is or isnt a week day. 
 *
 *         a. If alarm is set and it is a week day print "Sound Alarm! Time for work!" to the console
 *         b. Otherwise, print "I can sleep in!" to the console.
 * 
 * ↓ YOUR CODE HERE ↓ */

var alarmSet = "8am"
var weekDay = 5
if (weekDay >=1 && weekDay <= 5 && alarmSet == "8am") {
   console.log("Sound Alarm! Time for work!");
} else {
   console.log("I can sleep in!");
}

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 3: Username & Password \n`);

/**
 * Step 1: Create two variables, username and password.
 * Step 2: Create a conditional/control flow statement:
 *         - if the username is "Tommy123" and the password is "12345"
 *	          or the username is "Timmy456" and the password is "6789", 
 *		       print "Admin Login Successful" to the console
 *
 *	        - otherwise, print "Admin Access Denied"
 * 
 * ↓ YOUR CODE HERE ↓ */
var username = "Timmy1234" 
var password = "1234"
if (username === "Tommy1234" && password === "1234") {
   console.log("Admin Login Successful");
} else if (username === "Timmy456" && password === "6789") {
   
} else {
   console.log("Admin Access Denied");
}{
   
}


/*-------------------------------------------------------*/

console.log(`--------------------------
Question 4: Student Class \n`);

/**
 * Step 1: Create a variable called studentClass. Don't give it a value yet.
 *         There is a variable called studentGrade. It could be any number from 0-12.
 * 
 * Step 2: Write code that will change the value of studentClass based on studentGrade
 *          - 0-6 will be Elementary
 *          - 7-8 will be Middle
 *          - 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior 
 *          
 *         Any other value should return "Error" to the console.
 * 
 * ↓ YOUR CODE HERE ↓ */
var studentClass;

let studentGrade = 9;

if  (studentGrade >=0 && studentGrade <= 6) {
   console.log(studentClass = "Elementary");
} else if (studentGrade >=7 && studentGrade <= 8) {
   console.log(studentGrade = "Middle");
} else if (studentGrade ===9) {
   console.log(studentGrade = "Freshman");
} else if (studentGrade ===10 ) {
   console.log(studentGrade = "Sophomore");
} else if (studentGrade ===11) {
   console.log(studentGrade = "Junior");
}else if (studentGrade ===12) {
   console.log(studentGrade = "Senior");
} else {
   console.log('Error');
}


/*-------------------------------------------------------*/

console.log(`--------------------------
Question 5: Loops! \n`);

/**
 * Step 1: Write a "for loop" that will iterate backwards and print 10 to -10.
 * Step 2: Write a "do/while" loop that will prints 1 through 50.
 * Step 3: Modify the previous "do/while" loop.
 *         Print the iterator if the remainder (% // modulus) is 0 when divisible by 4.
 * 
 * ↓ YOUR CODE HERE ↓ */
for (let i = 10; i >= -10; i--){
   console.log(i);
}

let number = 1;
do {
   console.log(number);
   number++
} while (number <= 50);

let i = 1;
do {
   if (i % 4 === 0){
      console.log(i);
   }
   i++;
} while (i <= 50);

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 6: Debugging an infinite loop! \n`);

/**
 * Step 1: Read through the written code below.
 *         Figure out why it's causing an infinite loop & fix the syntax.
 * Step 2: Uncomment out to test
 * 
 * ↓ YOUR CODE HERE ↓ */

   /*    
   for (let i = 11; i > 10; i++) { 
      console.log(i);   
   } 
  */

   for (let i = 11; i >= 1; i--) { 
      console.log(i);   
   } 
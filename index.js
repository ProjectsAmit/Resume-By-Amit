// function checkNumber() {

//     let num = document.getElementById("number").value;

//     if (num === "") {

//         document.getElementById("demo").innerHTML = "Please enter a number";
//     }

//     num = Number(num);

//     if (num % 2 === 0) {
//         document.getElementById("demo").innerHTML = num + " is Even number";
//     } else {
//         document.getElementById("demo").innerHTML = num + " is Odd number";
//     }
// }
// function checkvalue() {

//     let num = document.getElementById("number").value;

//     if (num === "") {
//         document.getElementById("demo").innerHTML = "Please enter a number";
//         return;
//     }

//     num = Number(num);

//     if (isNaN(num)) {
//         document.getElementById("demo").innerHTML = "Invalid number";
//         return;
//     }

//     if (num > 0) {
//         document.getElementById("demo").innerHTML = "Positive number";
//     } 
//     else if (num < 0) {
//         document.getElementById("demo").innerHTML = "Negative number";
//     } 
//     else {
//         document.getElementById("demo").innerHTML = "Zero";
//     }
// }

// // find the largest number
// let num = 5;
// let num2 = 10;

// if ( num > num2 ) {
//     console.log("Largest number is: " + num);
// }else{
//     console.log("lagest number is: " + num2);
// }
// // find the smallest number
// let num3 = 100;
// let num4 = 105;
// let num5 = 98;

// let smallest;

// if( num3 < num4 && num3 < num5){
//     smallest = num3;
// }
// else if (num4 < num3 && num4 < num5 ){
//     smallest = num4;
// }else{
//     smallest = num5;
// }
// console.log('smallest number is: ' + smallest);

// // Check if a person is eligible to vote (age ≥ 18).

// let age = 19;

// if(age < 0){
//     console.log('Invalid age');
// }
// else if(age >= 18){
//     console.log('Eligible to vote');
// }
// else{
//     console.log('Not Eligible to vote');
// }
// // Check whether a number is divisible by 5.

// let number = 20;

// if(number % 5 === 0){
//     console.log('Number is divisible by 5')
// }else{
//     console.log('Number is not divisible by 5')
// }
// // Find the largest of three numbers.

// let a = 5;
// let b = 10;
// let c = 15;

// if(a >= b && a >= c){
//     console.log("Largest number is: " + a);
// }
// else if (b >= a && b >= c){
//     console.log('Largest number is: ' + b);
// }else{
//     console.log('Largest number is: ' + c);
// }

// // Check whether a year is a leap year.

// let year = 2026;

// if((year % 4 === 0 && year % 100 !== 0) || ( year % 4 === 0)){
//     console.log(year + ' Is a leap year');
// }else{
//     console.log(year + ' Not a leap year');
// }

// // Grade calculator using marks.

// let marks = 90;

// if(marks >= 90){
//     console.log('Grade: A+');
// }
// else if(marks >= 80){
//     console.log('Grade: A');
// }
// else if (marks >= 70){
//     console.log("Grade: B");
// }
// else if(marks >= 60){
//     console.log('Grade: c');
// }
// else if(marks >= 50){
//     console.log("Grade: D");
// }else{
//     console.log("Fail");
// }

// // Check if a number lies between 10 and 50.

// let s = 25;

// if(s > 10 && s < 50){
//     console.log(s + " Number lies between 10 and 50");
// }else{
//     console.log(s + " Number is not lies between 10 and 50");
// }

// // Check whether a character is vowel or consonant.

// let v = 'E';

// v = v.toLowerCase();

// if( v === "a" || v === "e" || v === "i" || v === "o" || v === "u"){
//     console.log(v + " Is Vowel");
// }else{
//     console.log(v + " Is Consonant")
// }

// // let name = "Amit";
// // let lastName = "Yadav";
// // let text = name.repeat(3);
// // let value = `Welcome ${name} kumar ${lastName}`;
// // console.log(value);

// // console.log(text);

// // let text1 = "Please visit Microsoft!";
// // let newText = text1.replace("Microsoft", "My School");
// // console.log(newText);

// // Print day of week using number (1–7)............''''

// let day = 3;

// switch(day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//     case 7:
//         console.log('Sunday');
//         break;     
//     default:
//         console.log('Invalid Day')                     
// }

// // Print month name using number (1–12)....

// let month = 3;
// switch (month) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('February');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     case 4:
//         console.log('April');
//         break;
//     case 5:
//         console.log('May');
//         break;
//     case 6:
//         console.log('June');
//         break;
//     case 7:
//         console.log('July');
//         break;
//     case 8:
//         console.log('August');
//         break;
//     case 9:
//         console.log('September');
//         break;
//     case 10:
//         console.log('October');
//         break;
//     case 11:
//         console.log('November');
//         break;
//     case 12:
//         console.log('December');
//         break;        
//     default:
//         console.log('Invalid Month')                                      
// }

// // Simple calculator using switch (+ − × ÷)...

// let Num1 = 40;
// let Num2 = 25;
// let operator = "+";

// let result;

// switch (operator) {
//     case "+":
//         result = Num1 + Num2;
//         console.log("Additions " + result);
//         break;

//     case "-":
//         result = Num1 - Num2;
//         console.log('Subtraction ' + result);
//         break;   

//     case "*":
//         result = Num1 * Num2;
//         console.log('Multiplication ' + result);
//         break;    

//     case "/":
//         if (Num2 !== 0) {
//             result = Num1 / Num2;
//             console.log('Division ' + result);
//         }else{
//             console.log("Cannot divide by zero");
//         }
//         break;    

//     default:
//         console.log("Invalid Operator")    
// }

// // Traffic light system (Red, Yellow, Green)...

// let color = "yellow";

// switch (color) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Wait");
//         break;
//     case "green":
//         console.log("Go"); 
//         break;
        
//     default :
//         console.log("Invalid color")
     
// }

// // Menu ordering system using switch...

// let order = 2;

// switch (order) {
//     case 1:
//         console.log("Your ordered Pizza");
//         break;
//     case 2:
//         console.log("your Ordered Burger");
//         break;
//     case 3:
//         console.log("Your Ordered Coldrink");
//         break;
    
//     default :
//         console.log("Invalid Ordered");

// }
// // Convert grade letter (A/B/C/D/F) into result message...

// let grade = "A";
// switch (grade) {
//     case "A":
//         console.log("Excellent");
//         break;
//     case "B":
//         console.log("Verry Good");
//         break;
//     case "C":
//         console.log("Good");
//         break;
//     case "D":
//         console.log("Pass");
//         break;
//     case "F":
//         console.log("Fail");
//         break;
//     default :
//         console.log("Invalid Grade");          
// }
// // Basic ATM menu:

// // 1 → Check balance

// // 2 → Withdraw

// // 3 → Deposit

// let balance = 5000;
// let option = 2;  

// switch (option) {

//     case 1:
//         console.log("Your Balance is ₹" + balance);
//         break;

//     case 2:
//         let withdrawAmount = 1000;

//         if (withdrawAmount <= balance) {
//             balance -= withdrawAmount;
//             console.log("Withdraw Successful");
//             console.log("Remaining Balance: ₹" + balance);
//         } else {
//             console.log("Insufficient Balance");
//         }
//         break;

//     case 3:
//         let depositAmount = 2000;
//         balance += depositAmount;

//         console.log("Deposit Successful");
//         console.log("Updated Balance: ₹" + balance);
//         break;

//     default:
//         console.log("Invalid Option");
// }

// // Convert number (1–5) into word (One, Two, Three…)...

// let numberr = 5;
// switch (numberr) {
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("Two");
//         break;
//     case 3:
//         console.log("Three");
//         break;
//     case 4:
//         console.log("Four");
//         break;
//     case 5:
//         console.log("Five");
//         break;
//     default :
//         console.log("Invalid Number");                   
// }

// // ✅ LEVEL 4 — LOOPS + LOGIC BUILDING
// // ==== Print numbers from 1 to 10 using loop.==== // 

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// // Print even numbers from 1 to 10...

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// // Find sum of first N natural numbers...

// let n = 5;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum = sum + i;
// }

// console.log(sum);

// // Find factorial of a number.
// let N = 5;
// let fact = 1;

// for (let i = 1; i <= N; i++) {
//     fact = fact * i;
// }

// console.log(fact);

// // Reverse a number (123 → 321).
// {
//     let num = 123;
// let reverse = 0;

// while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
// }

// console.log(reverse);
// }

// // FizzBuzz Problem:

// // Multiple of 3 → Fizz

// // Multiple of 5 → Buzz

// // Both → FizzBuzz

// for (let i = 1; i <= 100; i++) {

// if (i % 3 == 0 && i % 5 == 0){
//     console.log("FizzBuzz");
// }
// else if(i % 3 == 0){
//     console.log("Fizz");
// }
// else if(i % 5 == 0){
//     console.log("Buzz");
// }else{
//     console.log(i);
// }

// }
// // Find second largest number among three numbers.

// let x = 10;
// let y = 25;
// let z = 15;

// if ((x > y && x < z) || (x > z && x < y)) {
//     console.log("Second largest number is " + x);
// }
// else if ((y > x && y < z) || (y > z && y < x)) {
//     console.log("Second largest number is " + y);
// }
// else {
//     console.log("Second largest number is " + z);
// }



// let str = "Hello World!";
// let count = 0;

// for (let char of str) {
//     count++;
// }

// console.log("Total characters:", count);

// // Vowels Count ...

// let java = "Javascript";
// let cont = 0;

// for (let char of java) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         cont++;
//     }
// }
// console.log("Total vowel:", cont);

// // Spaces Count ...

// let test = "I Love Js";
// let countt = 0;

// for (let char of test) {
//     if (char === " "){
//         countt++;
//     }
// }
// console.log("total Space",countt);

// // Reverse String ...

// let text = "Hello";
// let reverse = "";
// for(let char of text) {
//     reverse = char + reverse;
// }

// console.log(reverse);

// // Upper Case ...

// let text1 = "Hello World";
// let counttt = 0;

// for (let char of text1) {
//     if (char >= "A" && char <= "Z") {
//         counttt++;
//     }
// }
// console.log("Upper letter:",counttt);

// // lowercase ...

// let text2 = "Hello Koderma";
// let count1 = 0;

// for (let char of text2) {
//     if (char >= "a" && char <= "z") {
//         count1++;
//     }
// }
// console.log("lower letter:", count1);

// // Digits counts

// let text3 = "abc25489de45";
// let count2 = 0;

// for (let char of text3) {
//     if(char >= 0 && char <= 9) {
//         count2++;
//     }
// }
// console.log("Digits",count2);

// // Spaces Remove...

// let text4 = "I Love Js";
// let resultt = "";

// for (let char of text4) {
//     if (char !== " ") {
//         resultt = resultt + char;
//     }
// }
// console.log(resultt);


// function amit () {
//     console.log("Hello Amit");
// }

// amit();


// function add (a,b) {
//     console.log(a + b);
// }

// add (5, 3);
// add (8, 4);

// function Say () {
//     console.log("Hello");
// }

// Say ();

// function hello (name) {
//     console.log("Hello " + name);
// }

// hello ("Amit");
// hello ("Rahul");

// function add1 (a, b) {
//     return (a * b);
// }

// let result = add1(5, 4);
// console.log(result);

// let add2 = (a,b) => {
//     return a + b;
// }

// console.log(add2(5,3));

// let sub = (a, b) => {
//     return a - b;
// }
// console.log(sub(5,3));
// function multiply(a,b){
//     return a * b;
// }

// let x = multiply(3,4);
// let y = multiply(2,5);

// console.log(x + y);

// function outer(){

//     function inner(){
//         console.log("Hello Amit");
//     }

//     inner();
// }

// outer();

// function name (name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function bye (){
//     console.log("Good BYe");
// }

// name ("Vikash", bye);

// function show(){
//     console.log("Hello");
// }

// let l = show();

// console.log(l);

// function add(a,b){
//     console.log(a + b);
//     return a + b;
// }

// let result = add(4,6);

// console.log(result);

// function test(a){
//     return a * 2;
// }

// console.log(test(5) + test(3));

function add(a,b){
    return a + b;
}

function square(n){
    return n * n;
}

console.log(square(add(2,3)));
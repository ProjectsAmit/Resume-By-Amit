// // // // alert('click the button');

// // // let num = -5;

// // // if (num > 0) {
// // //     console.log('positive');
// // // } else if (num < 0) {
// // //     console.log('negative');
// // // } else {
// // //     console.log("zero");
// // // }



// // // let numm = 7;

// // // if (numm % 2 === 0) {
// // //     console.log("even");
// // // }else {
// // //     console.log('odd');
// // // }

// // // let age = 20;

// // // if (age >= 18) {
// // //     console.log(' eligible to vote');
// // // }else {
// // //     console.log('Not eligible to vote');
// // // }


// // // let a = 15;
// // // let b = 25;

// // // if (a > b) {
// // //     console.log("Largest number is:", a);
// // // } else if (b > a) {
// // //     console.log("Largest number is:", b);
// // // } else {
// // //     console.log("Both numbers are equal");
// // // }

// // // let marks = 82;

// // // if (marks >= 90 && marks <= 100) {
// // //     console.log("Grade A");
// // // } else if (marks >= 75) {
// // //     console.log("Grade B");
// // // } else if (marks >= 60) {
// // //     console.log("Grade C");
// // // } else if (marks >= 40) {
// // //     console.log("Grade D");
// // // } else {
// // //     console.log("Fail");
// // // }


// // let units = 250;
// // let bill = 0;

// // if (units <= 100) {
// //     bill = units * 5;
// // } 
// // else if (units <= 200) {
// //     bill = units * 7;
// // } 
// // else if (units <= 300) {
// //     bill = units * 10;
// // } 
// // else {
// //     bill = units * 15;
// // }

// // console.log("Total Bill = ₹" + bill);


// // let balance = 8000;
// // let withdraw = -500;

// // if (withdraw <= 0) {
// //     console.log("Invalid Amount");
// // }
// // else if (withdraw > balance) {
// //     console.log("Insufficient Balance");
// // }
// // else if (withdraw % 100 !== 0) {
// //     console.log("Amount should be multiple of 100");
// // }
// // else {
// //     balance = balance - withdraw;
// //     console.log("Withdrawal Successful");
// //     console.log("Remaining Balance = ₹" + balance);
// // }


// // let totalAmount = 12000;   
// // let discount = 0;

// // if (totalAmount >= 10000) {
// //     discount = totalAmount * 0.20;
// // }
// // else if (totalAmount >= 5000) {
// //     discount = totalAmount * 0.10;
// // }
// // else if (totalAmount >= 2000) {
// //     discount = totalAmount * 0.05;
// // }
// // else {
// //     discount = 0;
// // }

// // let finalAmount = totalAmount - discount;

// // console.log("Discount: ₹" + discount);
// // console.log("Final Payable Amount: ₹" + finalAmount);


// // let salary = 750000;   
// // let tax = 0;

// // if (salary <= 250000) {
// //     tax = 0;
// // }
// // else if (salary <= 500000) {
// //     tax = (salary - 250000) * 0.05;
// // }
// // else if (salary <= 1000000) {
// //     tax = (250000 * 0.05) + ((salary - 500000) * 0.20);
// // }
// // else {
// //     tax = (250000 * 0.05) + (500000 * 0.20) + ((salary - 1000000) * 0.30);
// // }

// // console.log("Total Tax Payable: ₹" + tax);


// // let salaryy = 50000;       
// // let years = 7;            
// // let bonus = 0;

// // if (years > 10) {
// //     bonus = salaryy * 0.20;
// // }
// // else if (years > 5) {
// //     bonus = salaryy * 0.10;
// // }
// // else if (years > 3) {
// //     bonus = salaryy * 0.05;
// // }
// // else {
// //     bonus = 0;
// // }

// // console.log("Bonus Amount: ₹" + bonus);

// // User Input
// let price = parseFloat(prompt("Enter product price: "));
// let quantity = parseInt(prompt("Enter quantity: "));

// // Total before GST
// let totalBeforeGST = price * quantity;

// // GST (18%)
// let gstAmount = totalBeforeGST * 0.18;

// // Total after GST
// let totalAfterGST = totalBeforeGST + gstAmount;

// // Discount (10% if total > 5000)
// let discount = 0;
// if (totalAfterGST > 5000) {
//     discount = totalAfterGST * 0.10;
// }

// // Delivery Charge (₹100 if total < 1000)
// let deliveryCharge = 0;
// if (totalAfterGST < 1000) {
//     deliveryCharge = 100;
// }

// // Final Payable Amount
// let finalAmount = totalAfterGST - discount + deliveryCharge;

// // Display Output
// document.write("<h2>Shopping Cart Bill</h2>");
// document.write("Total Before GST: ₹" + totalBeforeGST + "<br>");
// document.write("GST (18%): ₹" + gstAmount + "<br>");
// document.write("Discount: ₹" + discount + "<br>");
// document.write("Delivery Charge: ₹" + deliveryCharge + "<br>");
// document.write("<h3>Final Amount: ₹" + finalAmount + "</h3>");

// let day = (new Date().getDay());

// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day");
// }

// // vowel

// let ch = 'a';

// switch(ch) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
// }

// // operators

// let num1 = 10;
// let num2 = 5;
// let operator = "*";

// switch(operator) {
//     case "+":
//         console.log("Addition:", num1 + num2);
//         break;
//     case "-":
//         console.log("Subtraction:", num1 - num2);
//         break;
//     case "*":
//         console.log("Multiplication:", num1 * num2);
//         break;
//     case "/":
//         console.log("Division:", num1 / num2);
//         break;
//     default:
//         console.log("Invalid Operator");
// }

// // traffic signel

// let color = "red";

// switch(color) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid Color");
// }

// // months 

// let month = 2;

// switch(month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid Month");
// }


// // let a;
// // document.write(a + 5);
// // console.log(typeof undefined);
// // console.log(typeof null);
// // console.log(a);
// // let a = 10;
// // const arr = [10, 20, 30];
// // arr[0] = 99;
// // console.log(arr[0]);
// // console.log(5 - "2");
// // console.log(5 + "5");
// // // console.log(true + true);
// // console.log([] + []);
// // console.log([] + {});
// // console.log(false == 0);
// // console.log(false === 0);
// function outer() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     }
// }

// let counter = outer();
// counter();
// counter();
// console.log(typeof NaN);

let i = 1;

while (i <= 100) {
    console.log(i);
  i++;
}

let password = "1234";
let userInput = "";

while (userInput !== password) {
    userInput = prompt("Enter password:");
}

console.log("Login Successful");
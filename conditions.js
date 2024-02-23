"use strict";

let day = parseInt(prompt("Enter day Number(1-7)"));
let dayName = "";

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    break;
}
console.log(`Chosen Day Is: ${dayName}`);
alert();


let age = parseInt(prompt("Enter your age"));

if (age<18) {
    alert("You are Underage!!. Try Again Later");
} else {
    alert("You qualify for an ID");
}

const beverage = age >= 50 ? "Water" : "Juice";
alert(`Prescribed drink for age: ${age} is ${beverage}`);

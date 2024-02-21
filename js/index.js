// function add(a,b){
//     return a + b;
// }
//console.log(add(30, 12));
"use strict";
var clickMe = document.getElementById("clickMe");
clickMe.addEventListener("click", (event) => {
  alert("You clicked me");
});

//alert("Hello World")//
//var message = prompt("Are you excited today? ");
//console.log(message);
let isBoss = confirm("Are you sure?");
console.log(isBoss)

let num = prompt("Enter your age");
console.log(typeof num);

let myNum = +num;
console.log(typeof myNum);
console.log(num)
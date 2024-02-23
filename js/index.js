"use strict";
// var clickMe = document.getElementById("clickMe");
// clickMe.addEventListener("click", (event) => {
//   alert("You clicked me");
// });

class Student {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(this.name);
  }
}
let studentOne = new Student("John Doe");
console.log(typeof Student); // function
console.log(typeof studentOne); //object
console.log(studentOne);

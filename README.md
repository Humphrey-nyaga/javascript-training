# javascript-training

## Functions

```javascript
let reverseNumber = (number) => {
  if (typeof number === "number") {
    let newString = number.toString();
    return newString.split("").reverse().join("");
  }
};

console.log(reverseNumber(Number("456")));

const checkPalindrome = (stringToEvaluate) => {
  stringToEvaluate = stringToEvaluate.toLowerCase().replace(/\s/g, ""); // removes whitespaces and convert to lower case
  let reversedString = stringToEvaluate.split("").reverse().join("");

  const isPalindrome = reversedString === stringToEvaluate;

  console.log(
    `${stringToEvaluate} ${isPalindrome ? "is" : "is not"} a palindrome`
  );
};

//checkPalindrome("nurses run");

const sortString = (stringToSort) => {
  return stringToSort.split("").sort().join("");
};

// sortString("baddie");
//console.log(sortString("webmaster"));

const capitalizeFirstLetter = (stringToCapitalize) => {
  return stringToCapitalize
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

let brownFox = capitalizeFirstLetter("the quick brown fox");
console.log(brownFox);
```

## JavaScript Objects

```javascript
// Creating an object
let object = new Object();
//or
let objectOne = {};

let student = {
  name: "John Doe",
  age: 23,
  "student no": "ST-34-2023",
  address: {
    lat: "-1.2321",
    long: "2.2134",
  },
};

//Access object properties
console.log(student.name);

// Access nested objects
console.log(student.address.lat);

//Access key value pairs declared using " "
console.log(student["student no"]);

let studentTwo = {
  name: "Smith Doe",
  age: 24,
  "student no": "ST-34-2023",
};

// Adding new property in an object
studentTwo.phone = "12345676";

// null coalescing operator --> when tryng to acess object keys that may not exist
console.log(studentTwo.address?.lat);
console.log(studentTwo.address?.long);

// check if property exists in an object
console.log("address" in student);
console.log("address" in studentTwo);
console.log(Object.hasOwnProperty.call(studentTwo, "name"));

// to remove a property in an object
delete studentTwo.age;

for (const key in student) {
  console.log(key);
  console.log(student[key]);
}

for (const key in studentTwo) {
  console.log(key);
  console.log(studentTwo[key]);
}
```

## Copying, Cloning and Comparing Objects

```javascript
// Comparison of objects
let student = {
  name: "John Doe",
  age: 26,
  phone: {
    home: "8989898989",
    work: "8989809878",
  },
};

let studentTwo = student;

let studentThree = {
  name: "Smith Doe",
};

let arbitraryStudent = {
  city: "Nairobi",
};

/* Student and studentTwo refer to the same object in memory
therefore they are equal
Modification of any property by student or studentTwo affects both of them
*/
console.log(student === studentTwo); // true
console.log(student === studentThree); // false
console.log(student === studentThree); // false

// Cloning Objects -> copy object properties from first object to the second one
let studentFour = {};
for (const key in student) {
  studentFour[key] = student[key];
}
console.log(studentFour);
console.log(student === studentFour); // false

/**Copy the values of all properties of one or more objects from one or more object to the target object */
let studentFive = {};
Object.assign(studentFive, student, arbitraryStudent);
console.log(studentFive);
```

## Use of `this` keyword

```javascript
// Use of `this` keyword
// Refer the current object properties
let student = {
  name: "John Doe",
  age: 23,
  greet() {
    console.log(this);
    console.log(`Good day ${this.name}!`);
  },
  sayHi() {
    console.log(student.name);
  },
};

student.greet();
student.sayHi();

// When working with independent functions, `this` will refer to undefined
function sayHello() {
  console.log(this); // undefined
}

let studentFive = {
  name: "John Doe",
  age: 23,
  greet: () => {
    console.log(this); // this in this case(function) refers to the window object, therefore will be undefined
    console.log(`Good day ${this.name}!`);
  },
};
```

## Classes

```javascript
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
```

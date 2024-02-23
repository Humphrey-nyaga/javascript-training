"use strict";

let max = 10;
while (max > 1) {
  console.log("i is: " + max);
  max--;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// do while
do {
  console.log(`Max is: ${max}`);
  max--;
} while (max > 1)

const myArray = ["Kenya", "Uganda","Rwanda", {"name":"Humphrey"}]
myArray.forEach(element => {
   //console.log(element) 
   console.dir(element)
});

for (const iterator of myArray) {
    
}


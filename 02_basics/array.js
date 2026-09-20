// Arrays
const MyArray = [1,2,3,4,5,6]
// console.log(MyArray);
// MyArray.push(7)
// console.log(MyArray);
// MyArray.pop()
// console.log(MyArray);

// MyArray.unshift(7) // Comes at start of the array 
// MyArray.shift()    // Removes the starting element of the array 

// console.log(MyArray.includes(5)); // Tells whether the element is in the array or not
// console.log(MyArray.indexOf(3));  //Gives the index of the element 

// const NewArr = MyArray.join() // Converts the given array into the string using join 
// console.log(NewArr);

console.log("A",MyArray);
const myn1 = MyArray.slice(1,3) // In slice last wali range include nahi hoti and original array me koi change nahi aata 

console.log(myn1);

console.log("B",MyArray);

const myn2 = MyArray.splice(1,3);  // In splice  last wali range bhi include hoti hai and original array me change aata hai 
console.log(myn2);

console.log("C",MyArray); // (1,5,6)


const MyArray2 = new Array(5,10,15,20,25,30)

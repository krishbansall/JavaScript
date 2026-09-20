const class1 = ["Ram","Shyam","Prem"];
const class2 = ["Krish","Naresh","Ajay"];

// class1.push(class2)
// console.log(class1);

// console.log(class1[3][0]); //Now like this there is an array inside an array

// const AllStudents = class1.concat(class2) // Concat returns the output in a new array 
// console.log(AllStudents);


const another_Array = [1,2,3,4,[5,6],7,[8,9,[1,2,3]]]; // Noww this is very complex array to put all elements into one array we use flat
const useable_another_array = another_Array.flat(Infinity);

console.log(useable_another_array);

console.log(Array.isArray("Krish")); // Tells it is array or not
console.log(Array.from("Krish"));    // Makes an array  from the given input
console.log(Array.from({name:"Krish"})); // We should specify from which value we have to make an array (whether from key or value) ##Interview




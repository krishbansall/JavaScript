console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1); // Output = True
console.log("02" > 1); // Output = True

console.log(null > 0); // Output = False
console.log(null == 0); // Output = False
console.log(null >= 0); // Output = True
/*
The reason is both equality (==) and comparison operators (<,>,>=,<=) work differently.
Comaprison operators convert null into a number ,treating it as 0.
Thats why null >= 0 is True and null > 0 is False.
*/

console.log(undefined == 0); // Output = False
console.log(undefined >= 0); // Output = False
console.log(undefined < 0); // Output = False


console.log("2" === 2); // This (===) aslo checks the data type of the both elements 
// so in this case "2" is a string and 2 is a number thats  why Output is 'False'.








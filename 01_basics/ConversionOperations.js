let score = "33abc"

console.log(typeof score); // String
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN (Not a number)

// ------------------------------------------------------------------------------------

let score = null

console.log(typeof score); // Object
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // 0

// ------------------------------------------------------------------------------------

let score = undefined

console.log(typeof score); // Undefined
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN (Not a Number)

// ------------------------------------------------------------------------------------

let score = 1

console.log(typeof score);
console.log(typeof (score));

let BolleanIsLoggedIn = Boolean(score);
console.log(typeof BolleanIsLoggedIn);
console.log(BolleanIsLoggedIn); 

/* 
1 => True
0 => False
"" => False
"Krish" => True
*/

// ------------------------------------------------------------------------------------
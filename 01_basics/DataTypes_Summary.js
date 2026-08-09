// DataTypes
// 1.Primitive
// 2.Non Primitive(Reference Types)

// Primitive ==> String,Number,Boolean,Undefined,Null Symbol,BigInt

const LoggedIn = true

const id = Symbol('123')
const AnotherID = Symbol('123')

console.log(id === AnotherID);

let userEmail; // Undefined


// Reference ==> Arrays,Objects,Functions

const serials = ["cid","tmkoc","xyz"] // Arrays

let MyObj = {
    name : "Krish",
    age : 19
}

const MyFunction = function(){
    console.log("Hello World");
}





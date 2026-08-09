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

// ---------------------------------------------------------------------------------

// Stack(Primitive) and Heap Memory(Non Primitive)

let myChannelName = "Krish Bansal"

let anotheChannelName = myChannelName

anotheChannelName = "Chai aur Code"

console.log(myChannelName);//Stack takes the copy of the memory address not tha actual address
console.log(anotheChannelName);// Any changes done is done in the copy of the element


let user1 = {
    email : "krishbansal",
    upi : "9876@ybl"
}

let user2 = {
    email : "krishbnsl",
    upi : "krishbansal@ybl"
}
user1 = user2
console.log(user1.email);// This is stored in a object where change in memory address is done to the original address of the element
console.log(user2.email);// This is a heap memory and a non primitive data type.




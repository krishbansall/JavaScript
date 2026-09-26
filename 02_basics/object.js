// Object  Literals (Isme Singleton nahi banega)

const MySym = Symbol("key1") // To declare a symbol


const JsUser = {
    name : "Krish Bansal",
    age : 19,
    [MySym] : "my key1", // To use a symbol in an object
    location : "Ghaziabad",
    email : "krish@google.com",
    IsLoggedIn : true,
    LastLoginDays : ["Monday","Sunday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(typeof JsUser[MySym]);

JsUser.email = "krish@amzn.com" // To overwrite a value
// Object.freeze(JsUser) // To freeze an object - no futher changes can be made
JsUser.email = "krish@flipkart.com" // This cant be printed bcz object is already freezed 
// console.log(JsUser);



JsUser.greeting = function(){ // How to use a function in JavaScript
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


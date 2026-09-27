// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Ram"
tinderUser.age = 20
tinderUser.IsLoggedIn = false

console.log(tinderUser);

const RegularUser = {
    email : "ram@tinder.com",
    name : {
        fullName : {
            firstName : "Ram",
            lastName : "Das"
        }
    }
}
console.log(RegularUser.name.fullName.firstName);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj3 = {5 : "a" , 6 : "b"}
// const obj4 = Object.assign({}, obj1 , obj2 , obj3) // We will use this type very less
const obj4 = {...obj1 , ...obj2 ,...obj3} // Spread function used to call object (same  we did also in array)
console.log(obj4);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // Gives all the keys of the object and give the output in an array format. So we can also use the loop.
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // Gives every entry in an array format 

console.log(tinderUser.hasOwnProperty('age'));

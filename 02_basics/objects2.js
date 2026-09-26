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

function MyName(){
    console.log("Krish Bansal");
}
MyName()

function AddTwoNum(num1,num2){
    // let result = num1+num2
    // return result;
    return num1 + num2
}
const result = AddTwoNum(5,10);
console.log(result);

function LoginUserMessage(username = "abc"){
    if(!username){ // !username (username === undefined)
        console.log("Please enter a valid username");
        return;
    }
    return `${username} just logged in`
}
console.log(LoginUserMessage());

function CalculateCartPrice(...num1){ //(num1)- will return only one variable but what if we have multiple variables
    return num1                    // (...num1) (...)is the rest operator this is same as spread operator but have differnt use cases
}
console.log(200,400,2000,500);

// Functions using objects 
const user ={
    username : "Krish",
    age : 19
}
function handleuser(anyobject){
    console.log(`Username is ${anyobject.username} and age of the user is ${anyobject.age}`);
}
// handleuser(user)
handleuser({
    username : "sam",
    age : 19
})

// Functions using arrays
const MyNewArray = [100,200,300,400]

function SecondValue(getarray){
    return getarray[1]
}
console.log(SecondValue(MyNewArray));

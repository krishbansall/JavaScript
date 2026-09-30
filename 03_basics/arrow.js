const user = {
    username : "Krish",
    age : 19,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
        console.log(this); // It will give the current context of the scope
    }
}
user.welcomeMessage()
username = "sam"
user.welcomeMessage()

console.log(this); // This will give the empty {} brackets becuase in the global scope there is nothing in this block


function name(){
    let username1 = "Krish"
    console.log(this.username1);// It will give undefined because 'this' work in objects in function 'this' do not runs 
    
}
name()



const name1= () =>{
    let username1 = "Krish"
    console.log(this.username1);// This will give undefined
    console.log(this);// This will also give undefined
}
name1()


// const addTwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4)); // Both will give the same output


const addTwo = (num1,num2) => (num1+num2)  // Both will give the same output
console.log(addTwo(3,4));
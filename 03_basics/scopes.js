c = 300 
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); // a is not defined 
// console.log(b); // b is not defined
console.log(c); // c is not defined but it will still print the value of c (That is why we dont use var)



function one(){
    const username = "Krish"

    function two(){
        const website = "Youtube" // For function 2 username is a global scope so it can be run in function 2
        console.log(username);
    }
    // console.log(website); // For function 1 website is a local scope so it cant be printed 
    two()
    
}
// one()

addOne(5);// Before calling we can initalize and it still will not give any error 
function addOne(num){
    return num+1
}
// addOne(5); // There will be no error 


addTwo // This will give an error (cant run before initalization)
const addTwo = function(value){
    return value + 2
}
addTwo(6)

// if

if(true){
    // all the basic if else codes in this 
}


const userLoggedIN = true
const DebitCard = true
const LoggedInFromGoogle = true
const LoggedInFromEmail = false
if(userLoggedIN && DebitCard){
    console.log("Allowed");
}

if(LoggedInFromEmail || LoggedInFromGoogle){
    console.log("Logged In");
    
}



//Null Coalescing Operator (??) : Works with null and undefined
//let val1 = 5 ?? 10 //It will take the first value of that will come across
//let val1 = null ?? 5 //Now the null comes at first place so it will take the second value (5)
//let val1 = undefined ?? 5 //Now the undefined comes at first place so it will take the second value (5)
let val1 = null ?? undefined

console.log(val1);

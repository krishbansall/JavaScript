const accountID = 1234 // This value cant be changed 
let accountEmail = "xyz@gmail.com" // This value can be changed 
var accountPassword ="12354" // Var is not used beacuse of issue in block scope and functional scope 
accountCity  = "Jaipur"
let accountState

// accountID = 2 // Not allowed 

accountEmail = "a@bc.com"
accountPassword = "56789"
accountCity = "Delhi"

console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])

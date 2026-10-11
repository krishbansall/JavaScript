//  ForEach Loop 


const coding = ["rb","cpp","python","rust","js"]

coding.forEach(function (val){ //  We didnt name the function because it is a call function 
    //console.log(val);    
})

// Another method

coding.forEach((value) => {
    //console.log(value);   
})

coding.forEach((item,index,arr) => {  // Gives every detail of the array 
    console.log(item,index,arr);  
})

// Normally in databases when the data comes it comes in array and in array the values are stored in objects to acces those 
// values  we use for each loop in array to acces the object values in array.

const MyCoding = [
    {
        name : "Krish",
        rollno : 123
    },
    {
        name : "Ram",
        rollno : 1234
    },
    {
        name : "Raman",
        rollno : 12345
    }
]

MyCoding.forEach((item) => {
    console.log(item.name);  // Now to access only the names of the given data we can use the ForEach loop    
})
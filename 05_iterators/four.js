// ForIn Loop
const  MyObject = {
    Js : "JavaScript",
    Cpp : "C++",
    Rb : "Ruby"
}

for (const key in MyObject) {
    //console.log(key);
}


const programming = ["js" , "rb" , "cpp"]
for (const key in programming) {    
   // console.log(key); //  This gives ouutput  0 1 2 
    console.log(programming[key]);            
}
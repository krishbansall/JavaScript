// For of

const arr = [1,2,3,4,5]

for (const val of arr) {
    //console.log(`Value of the array is ${val}`);   
}

const greeting = "Hello World"
for (const greet of greeting){
    //console.log(`Each char is ${greet}`);   
}

//Maps
const map = new Map()

map.set('In' , "India")
map.set('UK' , "United Kingdom")
map.set('Fr' , "France")
map.set('In' , "India")

//console.log(map);

for (const key of map){          // Using forOf loop in maps
    //console.log(key);    
}

for (const [value] of map){ // By this we can do destructuring of the map into an array
    //console.log(value);    
}

for (const [key,value] of map){
    //console.log(key,value);    
}


const MyObj = {
    name1 : "Krish",
    name2 : "Raman"
}
for (const name of MyObj){      // Object is not iterable
    console.log(name);
    
}
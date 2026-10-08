const email = "k@abes.ac.in"
if(email){
    console.log("HELLOOO!!");
}

//Falsy Values

// False ,0,-0,BigInt,"",null,Nan,undefined

//Truthy Values

// "0","false"," ",[],{},function(){}

if(email.length === 0){
    console.log("Array is Empty");
}

const EmptyObj = {}

if(Object.keys(EmptyObj) === 0){  //By using object.keys() this turns all the keys into an array.
    console.log("Object is Empty")
}
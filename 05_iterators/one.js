// For Loop

// for (let index = 0; index < 10; index++) {
//     console.log(index);    
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and outer loop ${i}`);
//     }   
// }


for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log("5 is Detected");
        break;
    }
    console.log(`Value of i is ${i} `);    
}


for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log("5 is Detected");
        continue;
    }
    console.log(`Value of i is ${i} `);    
}
const MyNums = [1,2,3]

// const MyTotal = MyNums.reduce(function (acc,curr_value) {
//     console.log(`Acc value is ${acc} and Current value is ${curr_value}`);
    
//     return acc + curr_value
// }, 0)
// console.log(MyTotal);


// By Using Arrow function 
const MyTotal = MyNums.reduce((acc,curr_value) => acc + curr_value , 0)
console.log(MyTotal);


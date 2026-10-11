const nums = [1,2,3,4,5,6,7,8,9,10]
//const newNums = nums.map((val) => {return val + 10})
//console.log(newNums);


// Chaining 

const newNums = nums
                     .map((val) => val * 10)
                     .map((val) => val + 1)
                     .filter((val) => val > 50)
console.log(newNums);
         
let myDate = new Date() // Date is an Object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());


let MyCreatedDate = new Date(2026,0,9)// In JS month starts from 0
console.log(MyCreatedDate.toDateString());


let MyCreatedTimeStamp = Date.now()
console.log(MyCreatedTimeStamp);// Give time in miliseconds
console.log(MyCreatedDate.getTime());

console.log(Date.now()/1000);// Miliseconds to seconds (divide by 1000)


MyCreatedDate.toLocaleString('default',{
    weekday:"long",
    month: "long"
})
console.log(MyCreatedDate.toDateString());


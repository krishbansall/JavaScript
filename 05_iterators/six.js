const coding = ["rb","cpp","python","rust","js"]

 const values = coding.forEach((item) => {
    //console.log(item);
    return item;
})
//console.log(values); // ForEach Loop donot return any values 


// Filter

const nums = [1,2,3,4,5,6,7,8,9,10]
const NewNums =  nums.filter((val) => val > 5 )
//console.log(NewNums); // In filter it returns the values


const books = [
    {
        title : "Book 1" , genre : "History" , publish : 1995
    },
    {
        title : "Book 2" , genre : "Action" , publish : 1997
    },
    {
        title : "Book 3" , genre : "Drama" , publish : 1988
    },
    {
        title : "Book 4" , genre : "History" , publish : 2005
    },
    {
        title : "Book 5" , genre : "Action" , publish : 1965
    },
    {
        title : "Book 6" , genre : "Philosophy" , publish : 1971
    },
    {
        title : "Book 7" , genre : "History" , publish : 2009
    },
]


let userBooks = books.filter((bk) => bk.genre === "History")
//console.log(userBooks);

userBooks = books.filter((bk) => {return bk.publish > 2000}) // Here we have used return because we have {}(scope) so return is used
console.log(userBooks);



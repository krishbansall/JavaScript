// Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //named iife
    console.log("Hello");
})();  // <= This semicolon is necessary to execute another iife

((   )  => {
    //unnamed iife
    console.log("Hello two"); 
})();

(( name  )  => {
    console.log(`Hello two ${name}`);
    
})("Krish")
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    console.log(n)
    n=n+1; 
    
    return function() {
        
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
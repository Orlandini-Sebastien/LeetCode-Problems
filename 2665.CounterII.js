/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let newInit = init
    let increment = function(){
        return function(){
            newInit++
            return newInit
        }
    }
    let decrement = function(){
        return function(){
            newInit--
            return newInit
        }
    }
    let reset = function(){
        return function(){
            newInit = init
            return newInit
        }
    }

    return {increment: increment(),decrement:decrement(),reset:reset()}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
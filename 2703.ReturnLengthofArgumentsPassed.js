/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    if(typeof(args)=="object"){
       let key = Object.keys(args);
       return (key.length);
   }
   else if(typeof(args)=="number"){
       return args.toString().length;
   }
   else return args.length;
};

/**
* argumentsLength(1, 2, 3); // 3
*/
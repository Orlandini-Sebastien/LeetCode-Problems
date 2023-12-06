/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (functions) => {
    return function (x) {
        let tot = x;
        for(let i=functions.length-1;i>=0;i--){
            tot=functions[i](tot);
        }
        return tot;
    }
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
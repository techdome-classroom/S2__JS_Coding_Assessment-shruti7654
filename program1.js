/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
            const stack = []; // initializing our stack
            const brackets = { '(': ')', '{': '}', '[': ']' }; // a hash-map to quickly compare opening and closing brackets
    
            for (let char of s) {
                if (brackets[char]) { // if we have a opening bracket, append it to our stack
                    stack.push(char);
                } else if (stack.length && brackets[stack[stack.length - 1]] === char) { 
                    stack.pop();
                } else {
                    return false; 
                }
            }
    
            return !stack.length; 
        };
    


module.exports = { isValid };



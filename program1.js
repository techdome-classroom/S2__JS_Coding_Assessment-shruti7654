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
                } else if (stack.length && brackets[stack[stack.length - 1]] === char) { // if we have a closing bracket, check if it matches the top of the stack
                    stack.pop();
                } else {
                    return false; // if the brackets don't match, return False
                }
            }
    
            return !stack.length; // if the stack is empty, it means all brackets are properly terminated
        };
    


module.exports = { isValid };



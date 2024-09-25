/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
            const stack = []; 
            const brackets = { '(': ')', '{': '}', '[': ']' }; 
    
            for (let char of s) {
                if (brackets[char]) { 
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



class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pair = {
            ")": "(",
            "]": "[",
            "}": "{",
        }

        if(s.length % 2 !== 0) {
            return false;
        }

        for(let i = 0; i < s.length; i++) {
            switch(s[i]) {
                case "[":
                case "{":
                case "(":
                    stack.push(s[i]);
                    break;
                case "]":
                case "}":
                case ")":
                    if(!stack.length || stack[stack.length - 1] !== pair[s[i]]) {
                        return false;
                    } else {
                        stack.pop();
                    }
                    break;
            }
        }

        return stack.length === 0;
    }
}

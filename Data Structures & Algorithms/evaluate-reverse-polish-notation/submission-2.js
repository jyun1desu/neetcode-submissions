class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            switch (tokens[i]) {
                case "+": {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a + b);
                    break;
                }
                case "-": {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a - b);
                    break;
                }
                case "*": {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a * b);
                    break;
                }
                case "/": {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(Math.trunc(a / b));
                    break;
                }
                default:
                    stack.push(Number(tokens[i]));
                    break;
            }
        }

        return stack[0];
    }
}

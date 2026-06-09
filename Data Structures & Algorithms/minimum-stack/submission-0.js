class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if(!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const topStack = this.stack.pop();
        if(topStack === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop()
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length -1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

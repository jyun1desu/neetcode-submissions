class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    maxSlidingWindow(nums, k) {
        const deque = [];
        const output = [];
        let left = 0;

        for(let right = 0; right < nums.length; right++) {
            while(deque.length && nums[deque[deque.length - 1]] < nums[right]) {
                deque.pop();
            }
            deque.push(right);

            if(deque[0] < left) {
                deque.shift();
            }

            if(right >= k - 1) {
                output.push(nums[deque[0]]);
                left++
            }
        }

        return output;
    }
}

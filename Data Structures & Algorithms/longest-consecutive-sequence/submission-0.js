class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        console.log(set)
        let result = 0;
        for(let i = 0; i < nums.length; i++) {
            if(!set.has(nums[i] - 1)) {
                let best = 1;
                let current = nums[i];
                while(set.has(current + 1)) {
                    current += 1;
                    best += 1;
                }
                result = Math.max(best, result);
            }
        };

        return result;
    }
}

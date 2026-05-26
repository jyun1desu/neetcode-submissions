class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();

        for(let i = 0; i < nums.length; i++) {
            const cur = nums[i];
            const toFind = target - cur;

            if(seen.has(toFind)) {
                return [seen.get(toFind), i]
            } else {
                seen.set(cur, i)
            }
        }
    }
}

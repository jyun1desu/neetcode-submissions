class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const lookup = new Set();
        for(let i = 0; i < nums.length; i++) {
            if(lookup.has(nums[i])){
                return true;
            } else {
                lookup.add(nums[i])
            }
        };
        return false
    }
}

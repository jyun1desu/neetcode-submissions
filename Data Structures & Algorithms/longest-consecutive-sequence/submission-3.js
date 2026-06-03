class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let result = 0;
        for (const n of set) {
            if(!set.has(n - 1)) {
                let best = 1;
                let current = n;
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

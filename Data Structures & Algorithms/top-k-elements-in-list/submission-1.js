class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        const buckets = Array(nums.length + 1)
            .fill(0)
            .map(() => []);

        for (const [num, count] of freq) {
            buckets[count].push(num);
        }

        const res = [];
        for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
            for (const num of buckets[i]) {
                res.push(num);
                if (res.length === k) break;
            }
        }

        return res
    }
}

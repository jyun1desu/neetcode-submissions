class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b);
        const res = [];

        for(let i = 0; i < sorted.length - 1; i++) {
            if (i > 0 && sorted[i] === sorted[i-1]) continue;

            const target = -sorted[i];
            let left = i + 1;
            let right = sorted.length - 1

            while(left < right) {
                const sum = sorted[left] + sorted[right];
                if(sum < target) {
                    left++
                } else if (sum > target) {
                    right--
                } else {
                    res.push([sorted[i],sorted[left], sorted[right]])
                    left++;
                    right--;
                    while (left < right && sorted[left] === sorted[left-1]) {
                        left++;
                    }
                }
            }
        };

        return res;
    }
}

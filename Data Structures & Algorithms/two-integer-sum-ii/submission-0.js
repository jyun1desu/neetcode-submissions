class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = 1;

        while (numbers[left] + numbers[right] !== target) {
            if(numbers[left] + numbers[right] < target) {
                right += 1;
            } else {
                left += 1;
                right = left + 1;
            }
        }

        return [left+1, right +1];
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // XYYX
    characterReplacement(s, k) {
        const map = new Map();
        let left = 0;
        let maxLength = 0;
        let maxFreq = 0;
        for(let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(s[i]));

            if((i - left + 1) - maxFreq > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++
            }

            maxLength = Math.max(maxLength, i - left + 1)
        };

        return maxLength
    }
}

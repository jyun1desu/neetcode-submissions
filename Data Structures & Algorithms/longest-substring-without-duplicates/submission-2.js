class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let maxLength = 0;
        let left = 0;

        for(let r = 0; r < s.length; r++) {
            if(map.has(s[r]) && map.get(s[r]) >= left) {
                left = map.get(s[r]) + 1;
            }
            map.set(s[r], r);
            maxLength = Math.max(maxLength, r - left + 1);
        }
        return maxLength;
    }
}

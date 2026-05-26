class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();

        if (s.length !== t.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
            map.set(t[i], (map.get(t[i]) || 0) - 1);
        }

        for (let count of map.values()) {
            if (count !== 0) return false;
        }

        return true;
    }

    groupAnagrams(strs) {
        const result = [[strs[0]]];

        for (let i = 1; i < strs.length; i++) {
            for (let j = 0; j < result.length; j++) {
                if (this.isAnagram(result[j][0], strs[i])) {
                    result[j].push(strs[i]);
                    break;
                } else {
                    if (j === result.length - 1) {
                        result.push([strs[i]]);
                        break;
                    }
                }
            }
        }

        return result;
    }
}

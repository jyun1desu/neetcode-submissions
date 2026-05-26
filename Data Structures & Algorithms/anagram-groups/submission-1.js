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

    groupAnagrams(strs) {
        const result = {};

        for (let i = 0; i < strs.length; i++) {
            const count = new Array(26).fill(0);
            for(let j = 0; j < strs[i].length; j++) {
                count[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            
            if(result[key]) {
                result[key].push(strs[i]);
            } else {
                result[key] = [strs[i]]
            };
        }

        return Object.values(result);
    }
}

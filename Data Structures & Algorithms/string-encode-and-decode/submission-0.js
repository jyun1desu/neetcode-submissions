class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((s)=>(`${s.length}#${s}`)).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0; //start point
        while(i < str.length) {
            const j = str.indexOf('#', i); // 1
            const length = parseInt(str.slice(i,j)); // 0,1
            res.push(str.slice(j+1, j + 1 + length));
            i = j + 1 + length;
        }

        return res;
    }
}

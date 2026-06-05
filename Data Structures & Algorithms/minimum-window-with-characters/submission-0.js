class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const targetMap = new Map();
        for (const c of t) {
            targetMap.set(c, (targetMap.get(c) || 0) + 1);
        }
        const windowMap = new Map();
        const need = targetMap.size;
        let left = 0;
        let have = 0;
        let output = "";

        for (let right = 0; right < s.length; right++) {
            windowMap.set(s[right], (windowMap.get(s[right]) || 0) + 1);

            if (targetMap.has(s[right]) && windowMap.get(s[right]) === targetMap.get(s[right])) {
                have++;
            }

            while (have === need) {
                if (output === "" || right - left + 1 < output.length) {
                    output = s.slice(left, right + 1);
                }

                windowMap.set(s[left], windowMap.get(s[left]) - 1);
                if (targetMap.has(s[left]) && windowMap.get(s[left]) < targetMap.get(s[left])) {
                    have--;
                }
                left++
            }
        }

        return output;
    }
}

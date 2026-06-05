class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    isMapEqual(a,b){
        if(a.size !== b.size) return false;
        for(const [k,v] of a) {
            if(b.get(k) != v) return false;
        }
        return true;
    }
    checkInclusion(s1, s2) {
        const s1Map = new Map();
        for(const l of s1) {
            s1Map.set(l, (s1Map.get(l) || 0) + 1)
        }

        const windowMap = new Map();
        let left = 0;

        for(let right = 0; right < s2.length; right++) {
            windowMap.set(s2[right], (windowMap.get(s2[right]) || 0) + 1);

            if(right - left + 1 > s1.length) {
                windowMap.set(s2[left], windowMap.get(s2[left]) - 1);
                if(windowMap.get(s2[left]) === 0) {
                    windowMap.delete(s2[left]);
                }
                left++
            }

            console.log({
                left,right, windowMap
            })
            if(right - left + 1 === s1.length) {
                if(this.isMapEqual(s1Map, windowMap)){
                    return true;
                }
            };
        }

        return false;
    };
}

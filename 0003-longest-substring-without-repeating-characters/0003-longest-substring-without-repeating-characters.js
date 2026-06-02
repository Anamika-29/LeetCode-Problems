/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let lastSeen = new Map();
    let start = 0;
    let maxLen = 0;
    let longest = "";

    for (let end = 0; end < s.length; end++) {
        const ch = s[end];
        if (lastSeen.has(ch) && lastSeen.get(ch) >= start) {
            start = lastSeen.get(ch) + 1;
        }
        lastSeen.set(ch, end);

        const curLen = end - start + 1;
        if (curLen > maxLen) {
            maxLen = curLen;
            longest = s.slice(start, end + 1);
        }
    }

   
    return longest.length;
};
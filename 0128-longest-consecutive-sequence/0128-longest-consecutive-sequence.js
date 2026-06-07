/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;

    let sorted = [...new Set(nums)].sort((a,b) => b-a);

    let current = 1;
    let max = 1;

    for(let i = 1; i < sorted.length; i++) {
        if(sorted[i-1] - sorted[i] === 1) {
            current++;
            max = Math.max(max, current);
        } else {
            current = 1;
        }
    }

    return max;
};
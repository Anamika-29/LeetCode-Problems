/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    let count = 0;
    for (let i = 0; i<nums.length;i++){
if(map.has(nums[i])){
    return true;
}

     
map.set(nums[i],count)



        

    }
    return false;
    
};
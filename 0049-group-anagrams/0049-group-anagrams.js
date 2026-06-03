/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let array = []
    for(let i = 0;i<strs.length;i++){
        console.log(strs[i].split("").sort().join(""))
        let sortedString = strs[i].split("").sort().join("");
        if(map.has(sortedString)){
            let valueOfKey = map.get(sortedString);
            let valueToBePushed = [...valueOfKey,strs[i]];
            map.set(sortedString,valueToBePushed)
        }
        else{

            map.set(strs[i].split("").sort().join(""),[strs[i]]);
        }

    }
    for(let[key,value] of map){
        array.push(value)
    }
    return array;
    
};
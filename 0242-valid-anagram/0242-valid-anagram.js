/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map1 = new Map();
    let map2 = new Map();
    let array1 = s.split("");
    let array2 = t.split("");
    let count = 1;
    console.log("Array 1",array1)
    for(let i = 0;i<array1.length;i++){
        if(map1.has(array1[i])){
            let value = map1.get(array1[i])
            map1.set(array1[i],value+1)
        }else{
            map1.set(array1[i],count)
        }
    }
    for(let i = 0;i<array2.length;i++){
        if(map2.has(array2[i])){
            let value = map2.get(array2[i])
            map2.set(array2[i],value+1)
        }else{
            map2.set(array2[i],count)
        }
    }

 

   if (map1.size !== map2.size) return false;

for (const [key, value] of map1) {
    if (map2.get(key) !== value) {
        return false;
    }
}

return true;
    return false;

    
};
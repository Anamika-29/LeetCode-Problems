/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let array = s.split("")
    for(let i = 0; i<array.length;i++){
        if(array[i] == "{" ||array[i] == "(" || array[i] == "[" ){
            stack.push(array[i])
        }
       

        if(array[i] == ")" ||array[i] == "}" || array[i] == "]" ){
              if (stack.length === 0) {
                return false;
            }
            let element = stack.pop();
            if(array[i] == ")"){
                 if(element != "("){
                    return false;
                 }
            }
            if(array[i] == "]"){
                 if(element != "["){
                    return false;
                 }
            }
            if(array[i] == "}"){
                 if(element != "{"){
                    return false;
                 }
            }
           
        }

    }
     if(stack.length==0){
                return true;
            }
            return false;
    
};
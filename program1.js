/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   const stack=[];
   const pairs={
    '(':')',
    '{':'}',
    '[':']'
   };
   for(let char of s){
    if(Object.keys(pairs).includes(char)){
        stack.push(char);
    }
    else{
        const top = stack.pop();
        if(!top||pairs[top]!==char){
            return false;
        }
    }
   }
   return stack.length===0;
};

module.exports = { isValid };



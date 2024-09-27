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
    if(Object.keys(pairs).includes(char))
   }
};

module.exports = { isValid };



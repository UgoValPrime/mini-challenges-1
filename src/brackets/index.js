/**
 * Implement the solution to strs
 *
 * @param {string} str The string of strs.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
 //var str = str.split('');
 let checker =[];
 //let bob;
 for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" ||str[i] === "{" ||str[i] === "["){
        checker.push(str[i])
      } else{
        if(checker.length === 0) {
        bob = 'invalid'

        }
        let lastValue = checker[checker.length - 1]
         if( (str[i] === ']' && lastValue === '[') || (str[i] === '}' && lastValue === '{') || (str[i] === ')' && lastValue === '(')){
             checker.pop()
             bob = 'valid'
         }else{
             bob = 'invalid'
             break;
         }
        }
    }
    return bob
 
 }


module.exports = isValid;

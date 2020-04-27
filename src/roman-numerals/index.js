/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    var lookup = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1};
   var myArray = roman.split('')
   let present;
   let presentValue;
   let next;
   let nextValue;
   total = 0;
    for (let i = 0; i < myArray.length; i++) {
        present = myArray[i]
        presentValue = lookup[present]
        next = myArray[i+1]
        nextValue = lookup[next]
        if (presentValue < nextValue ){
            total -= (presentValue);
        } else {
            total += (presentValue);  
        }
    }
    return total
}

module.exports = romanToDecimal;

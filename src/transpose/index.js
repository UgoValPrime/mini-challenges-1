/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    return array[0].map((col, i) =>array.map((row, j) => array[j][i]));
}

module.exports = transpose;

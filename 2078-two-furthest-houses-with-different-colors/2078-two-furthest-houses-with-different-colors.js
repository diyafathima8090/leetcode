/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let n = colors.length;
    let max = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (colors[i] !== colors[0]) {
            max = Math.max(max, i);
            break;
        }
    }
    for (let i = 0; i < n; i++) {
        if (colors[i] !== colors[n - 1]) {
            max = Math.max(max, n - 1 - i);
            break;
        }
    }

    return max;
};
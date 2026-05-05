/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    const stack = []
    for (let ch of s) {
        const last = stack[stack.length - 1]
        if (last && last !== ch && last.toLowerCase() === ch.toLowerCase()) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    return stack.join('')
};
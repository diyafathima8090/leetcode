/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    let long = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(long)) {
            long = long.slice(0, -1);
            if (long === "") return "";
        }
    }

    return long;
};
longestCommonPrefix(["flower","flow","flight"])
longestCommonPrefix(["dog","racecar","car"])

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let num = n.toString();
    let product = 1;
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        let digit = Number(num[i])
        product = product * digit
        sum = sum + digit;
    }
    return product - sum
};
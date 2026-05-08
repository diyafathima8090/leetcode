/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let l1 = word1.length;
    let l2 = word2.length
    res = ''
    for(i=0;i<Math.min(l1,l2);i++){
        res+=word1[i]
        res+=word2[i]
    }
    if(l1>l2){
        for(i=l2;i<l1;i++){
            res+=word1[i]
        }
    }
    if(l1<l2){
        for(i=l1;i<l2;i++){
            res+=word2[i]
        }
    }
    return res
};
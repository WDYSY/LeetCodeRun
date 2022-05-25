# record
## mine
```copy

```
## Optimized
```copy
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let max = '';
    for(let i = 0; i<s.length; i++){
        for(let j= 0; j<2; j++){
            let left = i, right=i+j;        
            while(s[left] && s[left]===s[right]){
                left--;
                right++;
            }
            if(right-left-1>max.length){
                max = s.substr(left+1, right-left-1)
            }
        }
    }
    return max
};
```

```copy
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxPal = '';
    
    for(let i = 0; i < s.length; i++) {
        bubble(i, i); // odd palindrome
        bubble(i, i+1); // even palindrome
    }
    
    function bubble(left, right) {

        while(left >= 0 && s[left] === s[right]) {
            left--;
            right++;
        }
        left++;
        right--;
        
        if(maxPal.length < right-left+1) {
            maxPal = s.slice(left, right+1)
        }
    }
    return maxPal;
};
```

# summary
* [5-1 对比错误答案](./../Ref/R1-1%20pic/5-1%20对比错误答案.png)
# Qs
* 

link
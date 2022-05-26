# record
## mine
```copy
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let reg = /[+-]?[0-9]*/
    let matchResult = s.trim().match(reg) || {}
    if(!!matchResult[0] && matchResult['index'] == 0 ){
        let parsedNum =  parseInt(matchResult[0])
        if(parsedNum > 2147483647 || parsedNum < -2147483648){
            return parsedNum > 0 ? 2147483647 : -2147483648
        }
        return parsedNum ? parsedNum : 0 //排除NaN的情况（如单个+-号parse不出来）
            
    }
    return 0
};
```
## Optimized
```copy
var myAtoi = function(str) {
    return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};
```

# summary
* [8-1 易错点](../Ref/R1-1%20pic/8-1%20易错点.png)
* [8-1 其它优解](../Ref/R1-1%20pic/8-1%20其它优解.png)
# Qs
* 

[link](https://leetcode.com/problems/string-to-integer-atoi/submissions/)
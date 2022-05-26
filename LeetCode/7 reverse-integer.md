# record
## mine
```copy
var reverse = function(x) {
    let reversed = Math.sign(x) * parseInt((x+"").split('').reverse().join(''))
    return (reversed > 2147483647 || reversed < -2147483648 ) ? 0 : reversed
};
<!-- 做第八题之后有感 -->
```
## Optimized
```copy
var reverse = function(x) {
    const reversed =  parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
};
十六进制简直不要太机智
```

# summary
* 
# Qs
* [复习进制转换](https://www.cnblogs.com/gaizai/p/4233780.html#_labelConvert33)

[link](https://leetcode.com/problems/reverse-integer/)
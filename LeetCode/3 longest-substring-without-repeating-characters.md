# record
## mine
```copy

```
## [Optimized](https://leetcode.com/submissions/detail/705906215/)
```copy
function lengthOfLongestSubstring(s) {
    let map = {}, left = 0;
    
    return s.split('').reduce((max, cur, i) => {
        left = map[cur] >= left ? map[cur] + 1 : left;
        map[cur] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}
```

# summary
* [3-1 易错点](./../Ref/R1-1%20pic/3-1%20易错点.png)
# Qs
* 

link